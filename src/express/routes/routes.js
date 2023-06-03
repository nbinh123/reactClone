// import các controller 
const MusicRouterAPI = require("../routes/api/music")
const ProductRouterAPI = require("../routes/api/product")
const ConfessionRouterAPI = require("../routes/api/confession")
const ExchangeProductRouterAPI = require("../routes/api/exchangeProduct")

function router(app){
    app.use("/music",  MusicRouterAPI)
    app.use("/product", ProductRouterAPI)
    app.use("/confession", ConfessionRouterAPI)
    app.use("/reward", ExchangeProductRouterAPI)
    // app.use("/haha", controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
}

module.exports = router