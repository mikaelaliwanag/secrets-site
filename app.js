const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set.apply('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

