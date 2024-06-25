const http = require('http')

const server = http.createServer((req, res) => {
    if(req.method == 'POST') {
        // expecting data from client
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString();
        })
        req.on('end', () => {
            console.log(body)
            console.log('Data is recieved')
        });
    } else {
        console.log('Function ends here.')
        res.end('welcome ot node js')
    }   
})

server.listen(3100)