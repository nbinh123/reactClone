const express = require("express") // dùng thư viện express
const app = express()
const MessageModel = require("../models/MessageModel")

class ConfessionController {

    //[GET]     /api/get
    index(req, res, next){
        MessageModel.find({})
            .then(mess => res.json(mess))
            .then(data => console.log(data))
    }

    //[POST]    /api/create

    create(req, res, next){
        const newData = new MessageModel(req.body)
        newData.save()
    }

    //[GET]     /api/find
    find(req, res, next) {

        MessageModel.find({})
            .then(prod => {
                let key = req.query.name
                let data = prod.filter(product => product.name.toLowerCase().startsWith(key))
                console.log(data)
                res.json(data)
            })
            .catch(next)
    }

    //[GET]  /api/delete/:id
    delete(req, res, next){
        MessageModel.findByIdAndDelete(req.query.id)
            .then((data) => res.json(data))
            .then(data => console.log(req.query.id))
            .catch(next)
    }

    //[GET]     /api/show/:id
    show(req, res, next){
        MessageModel.findById(req.params.id)
            .then((message) => res.json(message))
    }
}

module.exports = new ConfessionController