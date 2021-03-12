const mongoose = require('mongoose');
let db;
function configureDatabase() {
    mongoose.connect("mongodb://localhost:27017/BugsDB", { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('connection opened');
    });
}

module.exports = {
    configureDatabase: configureDatabase,
};