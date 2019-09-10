let express = require("express");
let port = 3000;

app = express();

app.get("/", (request, response) => {
    response.send("<h1>Home</h1>")
});

app.get("/route1", (request, response) => {
    response.send("<h1>Route 1</h1>")
});

app.listen(port, () => {
    console.log("server listen! in " + port)
});
