"use strict";
export default (app) => {
    app.get("/noticias", (request, response) => {
        response.render("sections/noticias/index");
    });
}