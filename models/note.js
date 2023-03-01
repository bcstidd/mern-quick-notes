const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = newSchema ({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: ObjectId,
        required: true,
    }, 
        timestamps: true
    })

module.exports = mongoose.model('Note', noteSchema);