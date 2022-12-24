const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write(JSON.stringify({ 'key': 'value' }))
    if (req.url == '/home') {
        res.write(JSON.stringify({ 'key1': 'value1' }))
    }
    res.end()
})

server.listen(port, () => {
    console.log(`Post: ${port}`)
})