

const mongoose = require('mongoose');

const Schema = mongoose.Schema

//tạo bảng phác thảo để lấy api
const Product = new Schema({
    name: String,
    quanlity: Number,
    price: Number,
    totalPrice: Number,
    img: String,
    tick: Boolean,
    id: Number,
    deleted: { type: Boolean, default: true }
})

module.exports = mongoose.model('Product', Product, "product")