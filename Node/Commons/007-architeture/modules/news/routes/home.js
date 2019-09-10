"use strict";
import Person from "../models/entities/Person.class"
export default (app) => {
    app.get("/", (request, response) => {
        let joao = new Person("joao",21, Date.now());
        console.log(joao);
        response.render("index/home/index");
    });
}