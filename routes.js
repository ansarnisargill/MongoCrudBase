const express = require("express");
var dateFormat = require('dateformat');
const bugsService = require("./Services/BugsService");
const router = express.Router({ mergeParams: true });
router.get("/", async (req, res) => {
    try {
        let bugs = await bugsService.GetAllBugs();
        for (let bug of bugs) {
            bug.datePassed = false;
            bug.remaining = "";
            let bugDate = new Date(bug.date);
            bugDate.setDate(bugDate.getDate() + 3);
            let now = new Date();
            if (bugDate < now) {
                bug.datePassed = true;
            }
            else {
                bug.remaining = diffBetweenDates(now, bugDate);
            }
            bug.completionDate = dateFormat(bugDate, "mmmm dS, yyyy");
            bug.completionTime = dateFormat(bugDate, "h:MM:ss TT");
        }
        res.render("Home", { bugs: bugs });
    }
    catch (error) {
        console.error(error);
        res.send(error);
    }
});
router.post("/bug", async (req, res) => {
    try {
        await bugsService.SaveBug(req.body.title, req.body.description, req.body.assignee);
        res.redirect("/");
    }
    catch (error) {
        console.error(error);
        res.send(error);
    }
});
function diffBetweenDates(nowDate, futureDate) {
    let delta = Math.abs(futureDate - nowDate) / 1000;
    let days = Math.floor(delta / 86400);
    delta -= days * 86400;
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    let minutes = Math.floor(delta / 60) % 60;
    return `${days} days, ${hours} hrs, ${minutes} mins.`
}
module.exports = router;