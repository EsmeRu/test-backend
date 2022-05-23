const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const { UserController } = require("./src/UserController");
require("dotenv").config();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

connection.connect((err) => {
  if (err) throw err;

  console.log("Connected succesfully to DB");
});

connection.on("error", function (err) {
  console.log("[mysql error]", err);
});

const userController = new UserController({ connection });

app.post("/", (req, res) => {
  userController.createUser(req.body, (result) => {
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
