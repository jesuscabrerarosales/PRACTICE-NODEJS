const http = require('node:http')
const { findAvailablePort } = require('./free-port')

const desiredPort = process.env.PORT ?? 3000
const server = http.createServer((req, rest)=>{
    rest.end('hola mundo')
})

// server.listen(0, ()=>{
//     console.log(`server listening on port ${server.address().port}`)
// })

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`server listening on port ${server.address().port}`)
    })
})