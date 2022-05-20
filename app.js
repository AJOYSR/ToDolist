const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
const path = require("path");
//*app er must needed*\\
const app = express();

var items = ["Buy Food","Cook food","Eat food"];
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var ajkerday = today.toLocaleDateString("en-US", options);
    res.render("list", { day: ajkerday ,newListItems: items});

});

app.post("/", function (req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("my server is rinning ok");
});