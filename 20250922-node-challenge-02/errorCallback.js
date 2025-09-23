function errorCallback(err, res) {
        res.writeHead(err, { 'Content-Type': 'text/plain' })
        res.end('Failed to serve file')
        return
}

module.exports = { errorCallback }