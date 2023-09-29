const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const multer = require("multer");
const cors = require("cors");

const ports = process.env.PORT || 3000;
const server = express();
server.use(bodyParser.json());
server.use(cors());

module.exports = {
  server: server,
  bodyParser,
  mysql,
  express
};

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
// checking connection
server.listen(ports, () => {
  console.log("server running ", ports);
});



db.user=require('./user');



// get all brand data
server.get("/viewBrand", (req, res) => {
  let qr = "select * from brand";
  console.log(qr);
  db.query(qr, (err, result) => {
    console.log(result);
    if (err) {
      console.log("Error : ", err);
      return err;
    }
    if (result.length > 0) {
      res.send({
        message: "get all brand details",
        data: result,
      });
    }
  });
});

// Set up Multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../ecommerce-admin/src/assets/uploads/brands"); // Destination folder where the files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// create brand data ===> POST
server.post("/addBrand", upload.single("image"), (req, res) => {
  console.log(req);
  const { filename, originalname, path } = req.file;
  let brand_name = req.body.brand_name;
  let status_id = req.body.status_id;
  let user_id = req.body.user_id;
  let qr = `INSERT INTO brand(name, img, status_id,user_id) VALUES(
              '${brand_name}',
              '${filename}',
              '${status_id}',
              '${user_id}'
              )`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    console.log(result, "result");
    res.send({
      message: "single brand data inserted successfully..",
    });
  });
});
// get single brand data - end here
// all BRAND CRUD OPERATION END HERE

// ALL CATEGORY CRUD OPERATION START HERE -------------------------------------------------------------------------

// get all category function start here
server.get("/viewCategory", (req, res) => {
  let qr = "select * from category";
  db.query(qr, (err, result) => {
    if (err) {
      console.log("Error : ", err);
      return err;
    }
    if (result.length > 0) {
      res.send({
        message: "get all category details",
        data: result,
      });
    }
  });
});

// for store category image function start here 
const categoryimgStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../ecommerce-admin/src/assets/uploads/category"); // Destination folder where the files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const uploadCategory = multer({ storage: categoryimgStorage });

// for add category function start here
server.post("/addCategory", uploadCategory.single("img"), (req, res) => {
  const { filename, originalname, destination } = req.file;
  console.log(req.file);
  let name = req.body.category_name;
  let statusid = req.body.status_id;
  let user_id = req.body.user_id;
  let qr = `INSERT INTO category(name, img, status_id,user_id) VALUES(
              '${name}',
              '${filename}',
              '${statusid}',
              '${user_id}'
              )`;
  console.log(qr);
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    console.log(result, "result");
    res.send({
      message: "single brand data inserted successfully..",
    });
  });
});

// ALL CATEGORY CRUD OPERATION END HERE