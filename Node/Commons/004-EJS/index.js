"use strict";
const express = require("express");
const environment = {
    PORT: 3000,
};

let app = express();

app.set("view engine", "ejs")

app.get("/", (request, response) => {
    response.render("sections/home/index");
});

app.get("/route1", (request, response) => {
    response.render("sections/route1/index")
});

app.listen(environment.PORT, () => {
    console.log("server listen! in " + environment.PORT)
});
