// 

const express = require("express");
const movierouter=require('./routes/movieroutes');
let app = express();
const morgan=require("morgan");

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./public'))
app.use("/api/v1/movies",movierouter)

module.exports=app;

//app.get("/api/v1/movies", getallmovies);
//app.post("/api/v1/movies", createmovie);
//app.get("/api/v1/movies/:searchid", getonemovie);
//app.put("/api/v1/movies/:updateId", updatemovieput);
//app.patch("/api/v1/movies/:updateId", updatemoviepatch);
//app.delete("/api/v1/movies/:deleteid", deletemovie);