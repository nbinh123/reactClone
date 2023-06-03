const mongoose = require('mongoose');
const Schema = mongoose.Schema

//tạo bảng phác thảo để lấy api
const ExchangeProduct = new Schema({
    name: String,
    img: String,
    coin: Number,
    decription: String
})

module.exports = mongoose.model('ExchangeProduct', ExchangeProduct, "exchangeProducts")