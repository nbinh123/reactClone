const express = require("express") // dùng thư viện express
const app = express()
const ExchangeProductModel = require("../models/ExchangeProduct")

class ExchangeProductController{
    show(req, res, next){
        ExchangeProductModel.find({})
            .then(data => res.json(data))
    }
}

module.exports = new ExchangeProductController