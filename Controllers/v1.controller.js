const handleList = (req, res) => {
    return res.status(200).send({
        message: "Hey"
    })
}

module.exports = {
    handleList
}