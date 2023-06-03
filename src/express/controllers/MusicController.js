const express = require("express") // dùng thư viện express
const app = express()
const MusicModel = require("../models/MusicModel")


class MusicController {
    //[GET]     /api/get
    index(req, res, next) {

        MusicModel.find({})
            .then(song => res.json(song))

    }
    //[POST]     /api/create 
    create(req, res, next) {
        const data = new MusicModel(req.body)
        data.save()
    }
    //[GET]     /api/find
    find(req, res, next) {
        MusicModel.find({})
            .then(song => {
                let key = req.query.name
                let data = song.filter(product => product.name.toLowerCase().startsWith(key.toLowerCase()))
                console.log(data)
                res.json(data)
            })
    }
    //[DELETE]  /api/
}

module.exports = new MusicController