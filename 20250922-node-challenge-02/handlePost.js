function handlePost(req, res) {
    console.log('POST request received')
    
    let body = '';
    req.on('data', chunk => { body += chunk.toString() })
    req.on('end', () => {
        const params = new URLSearchParams(body)
        const text = params.get('text')
        console.log(text)
        
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(`<p>You sent: ${text}</p>`)
    })
}

module.exports = { handlePost }