const { Router } = require("express")
const controller = require("../Controllers/products.controller")

const productRoute = Router()

productRoute.get("/:id?", controller.getProducts)
productRoute.post("/", (req, res) => {
    console.log(req.body)
})

module.exports = productRoute