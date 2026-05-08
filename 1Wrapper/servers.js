// creating server on nodejs #2
const http = require('http');


http.createServer((req, res)=>{
    res.end("Creating a NodeJS Server")
}).listen(8000);//
