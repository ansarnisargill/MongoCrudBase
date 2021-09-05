const mongoose = require('mongoose');
const bugSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    assignee: {
        type: String,
        required: [true, 'assignee is required']
    },
    date: {
        type: Date,
        required: [true, 'date is required']
    }
});
let Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;
