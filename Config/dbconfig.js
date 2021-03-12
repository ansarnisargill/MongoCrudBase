const mongoose = require('mongoose');
const connString=require("./connectionString");
let db;
function configureDatabase() {
    mongoose.connect(connString, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('connection opened');
    });
}

module.exports = {
    configureDatabase: configureDatabase,
};