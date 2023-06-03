const express = require("express")
const router = express.Router()

const ProductController = require("../../controllers/ProductController")

router.get("/api/find", ProductController.find)
router.get("/api/get", ProductController.index)
router.get("/api/filter", ProductController.filter)

module.exports = router