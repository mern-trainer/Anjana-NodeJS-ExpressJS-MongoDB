const http = require("http")
const url = require("url") // build-in module

const server = http.createServer()

server.on("request", async (request, response) => {

    const path = request.url
    
    const { pathname, query } = url.parse(path, true)

    if (pathname == "/api") {
        const { id } = query
        if (id < 1) {
            return response.end("not found")
        }
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const result = await res.json()
        response.writeHead(200, { "Content-Type": "application/json" })
        response.write(JSON.stringify(result))
        response.end()
    }

})

server.listen(5000, (error) => {
    if (error) {
        return process.exit(1)
    }
    console.log("Running: http://localhost:5000" )
})