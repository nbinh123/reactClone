const express = require("express")
const router = express.Router()

const MusicController = require("../../controllers/MusicController")


router.get("/api/get", MusicController.index)
router.post("/api/post", MusicController.create)
router.get("/api/find", MusicController.find)

module.exports = router