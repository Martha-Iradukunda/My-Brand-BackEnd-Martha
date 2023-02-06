const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    repeatPassword: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: "admin"
    },

    isVerified: {
        type: String,
        default: "false"
    },

    dateCreated: {
        type: 'date',
        default: Date.now()

    }
})

const User = mongoose.model('User', userSchema)
module.exports = User