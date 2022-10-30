const express = require("express");
const morgan = require("morgan");

//const cssBootstrap = require("bootstrap")
const app = express();
const statics = __dirname.replace("app", "public");

app.set("port", process.env.PORT || 3000); // para el servidor

app.set("views", "src/public/view");
app.set("view engine", "pug");

app.use(morgan("dev"));
app.use(express.static(statics));

//app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css/bootstrap.min.css"))

app.get("/", (req, res) => {
  res.render("page/index");
});

module.exports = app;
