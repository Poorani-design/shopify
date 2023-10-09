const { server, bodyParser, mysql, express ,multer} = require('./index.js');

// get all product data
server.get("/viewProduct", (req, res) => {
    let qr = "select * from product";
    db.query(qr, (err, result) => {
      if (err) {
        console.log("Error : ", err);
        return err;
      }
      if (result.length > 0) {
        res.send({
          message: "get all product details",
          data: result,
        });
      }
    });
  });
  