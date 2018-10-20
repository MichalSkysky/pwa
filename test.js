const port = process.env.OPENSHIFT_NODEJS_PORT || 8080
const ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
const http = require('http')

http.createServer((req, res) => res.end('test')).listen(port, ip, e => console.log('listening to ' + ip + ':' + port))