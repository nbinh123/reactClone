const express = require("express")
const router = express.Router()

const ExchangeProductController = require("../../controllers/ExchangeProductController")


router.get("/api/show", ExchangeProductController.show)


module.exports = router