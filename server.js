var fs = require('fs')

const options = {
  key: fs.readFileSync('privateKey.key'),
  cert: fs.readFileSync('certificate.crt')
};

//require('http').createServer((req, res) => {
require('https').createServer(options, (req, res) => {
  let file = req.url.slice(1) || 'index.html';

  console.info(file);

  fs.readFile(file, function(err, data){
    switch (file.split('.').pop()) {
      case 'html': res.setHeader('Content-Type', 'text/html'); break;
      case 'js': res.setHeader('Content-Type', 'text/javascript'); break;
      case 'json': res.setHeader('Content-Type', 'application/json'); break;
      case 'css': res.setHeader('Content-Type', 'text/css'); break;
      case 'png': res.setHeader('Content-Type', 'image/png'); break;
    }

    res.end(data);
  })
}).listen(3001, function(){
  console.info(3001);
});