const express = require("express");
const dbserv = require('./Config/dbconfig');
const routes = require('./routes');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);
dbserv.configureDatabase();
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
