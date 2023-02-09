const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    othername: {
        type: String,
        required: false

    },
    email: {
        //id
        type: String,
        required: true
            // unique: true
    },

    message: {
        type: String,
        required: true
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;