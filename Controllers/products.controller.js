const axios = require("axios")
require("dotenv").config()

const getProducts = async (request, response) => {
    try {
        const { id } = request.params
        const { limit, skip, q } = request.query
        let path;
        if (id) {
            path = "/products/" + id  
        } else {
            if (limit && skip) {
                path = `/products?limit=${limit}&skip=${skip}`
            } else if(limit && !skip){
                path = `/products?limit=${limit}`
            } else if (!limit && skip) {
                path = `/products?skip=${skip}`
            } else {
                path = `/products`  
            }
        }
        const { data } = await axios.get(`${process.env.API_ORIGIN}${path}`)
        let res;
        if (q) {
            if (id) {
                if (data.title.includes(q)) {
                    res = data
                } else {
                    res = {}   
                }
            } else {
                res = data.products.filter(product => product.title.includes(q))
            } 
            return response.status(200).send(res)
        } else {
            return response.status(200).send(data)
        }
    } catch (err) {
        return response.status(500).send({
            message: err.message
        })
    }
}

module.exports = {
    getProducts
}