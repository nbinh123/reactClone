const mongoose = require('mongoose');

const Schema = mongoose.Schema

//tạo bảng phác thảo để lấy api
const Message = new Schema({
    from: { type: String, default: "" },
    to: { type: String, default: "" },
    message: String
})

module.exports = mongoose.model('Message', Message, "confession")