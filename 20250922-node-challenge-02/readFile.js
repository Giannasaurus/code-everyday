const fs = require('fs')
const path = require('path')
const { errorCallback } = require('./errorCallback')

function readFile(file, encoding, res) {
    console.log(`Served ${file} successfully`)
    fs.readFile(path.join(__dirname, 'public', file), encoding, (err, data) => {
        if (err) return errorCallback(404, res)
        res.end(data)
    })
}

module.exports = { readFile }