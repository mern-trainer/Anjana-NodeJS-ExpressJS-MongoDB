const express = require("express")
const v1Route = require("./Routes/v1.route")
const v2Route = require("./Routes/v2.route")

const app = express()

app.use(express.json())

app.use("/v1", v1Route)
app.use("/v2", v2Route)

app.listen(8080, (err) => {
    if (err) return process.exit(1)
    console.log("Running...")
})

// MVC => model view controller 