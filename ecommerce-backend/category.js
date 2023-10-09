const { server, bodyParser, mysql, express ,multer} = require('./index.js');

// ALL CATEGORY CRUD OPERATION START HERE -------------------------------------------------------------------------

// get all category function start here
server.get("/viewCategory", (req, res) => {
    let qr = "select * from category";
    db.query(qr, (err, result) => {
      if (result.length > 0) {
        res.send({
          message: "get all category details",
          status: true,
          data: result,
        });
        // res.err({
        //   message:err,
        //   status:false
        // })
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
    let name = req.body.category_name;
    let statusid = req.body.status_id;
    let user_id = req.body.user_id;
    let qr = `INSERT INTO category(name, img, status_id,user_id) VALUES(
                '${name}',
                '${filename}',
                '${statusid}',
                '${user_id}'
                )`;
    db.query(qr, (err, result) => {
      res.send({
        status: true,
        message: "single category data inserted successfully..",
      });
      res.err({
        status: false,
        message: err,
      })
    });
  });
  
  // ALL CATEGORY CRUD OPERATION END HERE