const http = require("http")
const url = require("url")

const server = http.createServer()

server.on("request", async (request, response) => {

    const path = request.url
    
    const { pathname } = url.parse(path, true)

    if (pathname == "/api") {
        let obj;
        request.on("data", (body) => {
            obj = Buffer.from(body).toString()
        })
        request.on("end", async () => {
            const data = JSON.parse(obj)
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`)
            const result = await res.json()
            response.writeHead(200, { "Content-Type": "application/json" })
            response.write(JSON.stringify(result))
            response.end()
        })
        
    }

})

server.listen(5000, (error) => {
    if (error) {
        return process.exit(1)
    }
    console.log("Running: http://localhost:5000" )
})