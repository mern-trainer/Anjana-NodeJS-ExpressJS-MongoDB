const { Router } = require("express")
const controllers = require("../Controllers/v1.controller")
const sampleMid = require("../Middleware/sample")

const v1Route = Router()

v1Route.get("/list", sampleMid, controllers.handleList)

module.exports = v1Route