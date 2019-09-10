"use strict";
import express from "express";
let app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

export default app;