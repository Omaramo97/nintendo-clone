const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./userCtrl");
const port = 3001;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ info: "Node.js, and Postgres API" });
});

app.get("/userinfo", db.getUsers);
app.get("/userinfo/:id", db.getUserById);
app.post("/userinfo", db.createUser, (req, res) => {
  const username = req.body.username;
  const userpassword = req.body.userpassword;
});
app.post("/userinfo/login", db.getLogin, (req, res) => {
  const username = req.body.username;
  const userpassword = req.body.userpassword;
});
app.listen(port, () => {
  console.log(`Boat is in ${port}!`);
});
