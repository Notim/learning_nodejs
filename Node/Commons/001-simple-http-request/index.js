let http = require("http");

let server = http.createServer((request, response) => { 
  console.log("osh não mostra nada no console que porra"); 
  response.end("<h1>Hello world</h1>");
});

server.listen(3000);