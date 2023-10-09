const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const multer = require("multer");
const cors = require("cors");

const ports = process.env.PORT || 3000;
const server = express();
server.use(bodyParser.json());
server.use(cors());



//CREATE CONNECTION ==========
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecommerce",
  port: 3306,
});

// DB CONNECTION ===========
db.connect((err) => {
  if (err) {
    return err;
  }
});

module.exports = {
  server: server,
  bodyParser,
  mysql,
  express,
  multer,
  db
};
// checking connection
server.listen(ports, () => {
  console.log("server running ", ports);
});

db.user = require("./user");
db.brand = require("./brand");

