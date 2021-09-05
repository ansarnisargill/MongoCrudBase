const Bug = require('../Models/Bug');
async function SaveBug(title, description, assignee) {
    let obj = new Bug({
        title: title,
        description: description,
        assignee: assignee,
        date: new Date()
    });
    await obj.save();
}

async function GetBug(id) {
    let bug = await Bug.findOne({ _id: id }).exec();
    return bug;
}
async function GetAllBugs() {
    let bugs = await Bug.find({}).exec();
    return bugs;
}
module.exports = {
    SaveBug,
    GetBug,
    GetAllBugs
};