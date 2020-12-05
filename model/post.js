const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    contentType: String,
    message: String 
});

module.exports = mongoose.model("post", Post);