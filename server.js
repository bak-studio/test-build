const http = req('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Awesome 123')
})
const PORT = process.env.port || 8080
server.listen(PORT, () => console.log('Listening'))
