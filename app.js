const express = require("express");
const app = express();
const config = require("./config/index");


app.use(express.json());

// register view engine
app.set("view engine", "ejs");


// Routing
app.get("/", (req, res) => {
  res.render("index");
});

const onListening = () => {
  console.log(`Listening on ${config.PORT}`);
};

app.listen(config.PORT, onListening);
