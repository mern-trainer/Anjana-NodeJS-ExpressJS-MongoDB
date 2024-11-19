const logger = (req, res, next) => {
    const initialTime = new Date().getTime()
    const url = req.url
    const method = req.method
    res.on("finish", () => {
        const endTime = new Date().getTime()
        const time = endTime - initialTime
        console.log(`${method} - ${url} - ${time} --ms [${res.statusCode}]`)
    })
    next()
}

module.exports = logger