const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000

const server = http.createServer((req, res) => {
    const url = req.url

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.end('Server error,', err)
                return
            }
            res.end(data)
            console.log('Served HTML document successfully')
        })
    }
    else if (url === '/time') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(new Date().toString())
    }
    else if (url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Hello JSON'}))
        
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('404 Not Found')
    }
})

server.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`)
})