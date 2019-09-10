"use strict";
export default (app) => {
    app.get("/home", (request, response) => {
        response.render("index/home/index");
    });
}