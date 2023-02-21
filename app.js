import express from "express";
import fetch from "node-fetch";
import config from "./config/index.js";
import connectToDB from "./config/db.js";
import User from "./models/users.js";

const app = express();

app.use(express.json());

// register view engine
app.set("view engine", "ejs");

connectToDB();

// Routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/users/fetch", async (req, res) => {
  const url = "https://randomuser.me/api/";
  try {
    console.log(`fetching`);
    const response = await fetch(url);
    const data = await response.json();
    const users = data.results;

console.log(users)
    let userData = {
      name: users[0].name.first,
      gender: users[0].gender,
      age: users[0].age,
      email: users[0].email,
      picture: users[0].picture.medium,
    };
    console.log(userData)

    const user = await User.create({userData})

    console.log(` user ${user}`);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
  //   res.render("index");
});


const onListening = () => {
  console.log(`Listening on ${config.PORT}`);
};

app.listen(config.PORT, onListening);
