const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    contentType: {
        type: String,
        min: 2,
        required: true,
    },
    message:  {
        type: String,
        min: 2,
        required: true,
    }, 
});

module.exports = mongoose.model("post", Post);