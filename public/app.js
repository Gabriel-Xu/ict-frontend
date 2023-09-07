var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("./views"))

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/resources", (req, res) => {
    res.render("resources");
});

app.get("/gallery", (req, res) => {
    res.render("gallery");
});

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});
