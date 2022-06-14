const http = require('http')
const port = 4000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end('Hello Coders')
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})