const fs = require("fs");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const homeRoutes = require('./routes/home');
const loginRoutes = require('./routes/login');

app.use(bodyParser.urlencoded({ extended: false }));


app.use(homeRoutes);
app.use(loginRoutes);
app.use((req,res,next)=>{
  res.status(404).send("<h1>Page not found!!!</h1>");
})

app.listen(4000);
