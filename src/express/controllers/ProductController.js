const express = require("express") // dùng thư viện express
const app = express()
const ProductModel = require("../models/ProductModel")

class ProductController {
    find(req, res, next) {
        ProductModel.find({})
            .then(prod => {
                let key = req.query.name
                let data = prod.filter(product => product.name.toLowerCase().startsWith(key))
                console.log(data)
                res.json(data)
            })
    }

    index(req, res, next){
        ProductModel.find({})
            .then(prod => res.json(prod))
            .catch(next)
    }
    filter(req, res, next){
        ProductModel.find({})
            .then(prod => {
                const limit = req.query.limit
                const minimum = req.query.minimum
                let data = prod.filter(product => (product.price <= limit) && (product.price >= (minimum ? minimum : 0)))
                res.json(data)
            })
    }
}

module.exports = new ProductController