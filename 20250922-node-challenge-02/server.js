const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3000;
const { readFile } = require('./readFile')
const { handlePost } = require('./handlePost')
const { errorCallback } = require('./errorCallback')

const server = http.createServer(async (req, res) => {
    const url = req.url
    const method = req.method
    
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        readFile('index.html', 'utf-8', res)
    }
    else if (url === '/form' || url === '/form.html' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        readFile('form.html', 'utf-8', res)
    }
    else if (url === '/echo' && method === 'POST') {
        
        readFile('echo.html', 'utf-8', res)
        handlePost(req, res)
    }
    else {
        errorCallback(404, res)
        res.end('404 Not Found')
    }
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})