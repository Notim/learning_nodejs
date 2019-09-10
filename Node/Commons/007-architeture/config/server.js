import express from "express";
let app = express();

app.set("view engine", "ejs");
app.set("views", "./news/views");

export default app;