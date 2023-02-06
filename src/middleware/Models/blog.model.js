//Defines database structure
const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    // image: {
    //     type: String,
    //     required: true,
    // },
    blogBody: {
        type: String,
        required: true,
    },

});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;