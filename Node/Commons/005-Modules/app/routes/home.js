"use strict";
export default (app) => {
    app.get("/", (request, response) => {
        response.render("sections/home/index");
    });
}