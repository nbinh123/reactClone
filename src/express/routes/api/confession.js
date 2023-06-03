const express = require("express")
const router = express.Router()

const ConfessionController = require("../../controllers/ConfessionController")

router.get("/api/get", ConfessionController.index)
router.post("/api/create", ConfessionController.create)
router.get("/api/find", ConfessionController.find)
router.get("/api/delete", ConfessionController.delete)
router.get("/api/show/:id", ConfessionController.show)

module.exports = router