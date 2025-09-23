const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3000;
const { readFile } = require('./readFile')
const { handlePost } = require('./handlePost')

const server = http.createServer(async (req, res) => {
    const url = req.url
    const method = req.method
    
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        readFile('index.html', 'utf-8', res)
    }
    else if (url === '/form' || url === '/form.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        readFile('form.html', 'utf-8', res)
        
        if (method === 'POST') {
            handlePost(req, res)
        }
    }
    else if (url === '/echo') {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        readFile('echo.html', 'utf-8', res)
    }
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})