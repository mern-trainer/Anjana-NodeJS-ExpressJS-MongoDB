const http = require("http")
const url = require("url")
const { v4 } = require("uuid")

const server = http.createServer()

const todoList = []

server.on("request", async (request, response) => {

    const path = request.url
    
    const { pathname } = url.parse(path, true)

    if (pathname == "/create") {
        if(request.method !== "POST") return response.end("Not Allowed")
        let title;
        request.on("data", (data) => {
            const obj = Buffer.from(data).toString()
            const res = JSON.parse(obj)
            title = res.title
        })
        request.on("end", () => {
            const dateTime = new Date().toLocaleString("en-IN")
            const obj = {
                id: v4(),
                title: title,
                createdAt: dateTime,
                updatedAt: dateTime,
            }
            todoList.push(obj)
            return response.end(JSON.stringify(obj))
        })
    }

    if (pathname == "/read") {
        return response.end(JSON.stringify(todoList))
    }

})

server.listen(5000, (error) => {
    if (error) {
        return process.exit(1)
    }
    console.log("Running: http://localhost:5000" )
})