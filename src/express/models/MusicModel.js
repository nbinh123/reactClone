const mongoose = require('mongoose');

const Schema = mongoose.Schema

//tạo bảng phác thảo để lấy api
const Music = new Schema({
    name: String,
    author: String,
    link: String,
})

module.exports = mongoose.model('Music', Music, "music")