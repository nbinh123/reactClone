const mongoose = require('mongoose');

const Schema = mongoose.Schema

//tạo bảng phác thảo để lấy api
const TagsMusic = new Schema({
    name: String,
    author: String,
    link: String,
    of: { type: String, default: "" },
    deleted: { type: Boolean, default: true},
})

module.exports = mongoose.model('TagsMusic', TagsMusic, "tagsMusic")
