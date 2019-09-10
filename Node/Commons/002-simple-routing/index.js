let http = require("http");

let server = http.createServer((request, response) => { 
    let url = request.url;
    console.log(url);

    if (url == "/rota1") { 
        response.end("<h1>Rota1</h1>");
    }
    if (url == "/Rota2") { 
        response.end("<h1>Rota2</h1>");
    }
    if (url == "/Rota3") { 
        response.end("<h1>Rota3</h1>");
    }
    if (url == "/Rota4") { 
        response.end("<h1>Rota4</h1>");
    }
    response.end("<h1>Default</h1>");
});
server.listen(3000);