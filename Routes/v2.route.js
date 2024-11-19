const { Router } = require("express")

const v2Route = Router()

v2Route.get("/list", (req, res) => {
    return res.status(200).send({
        message: "Hello"
    })
})

module.exports = v2Route