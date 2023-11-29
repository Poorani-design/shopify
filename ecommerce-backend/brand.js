const { server, bodyParser, mysql, express ,multer,db} = require('./index.js');


// get all brand data
server.get("/viewBrand", (req, res) => {
    let qr = "select * from brand";
    db.query(qr, (err, result) => {
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
      res.send({
        message: "single brand data inserted successfully..",
        status: true,
      });
    });
  });
 
  // Edit brand data ===> PUT
  server.put("/editBrandById", upload.single("image"), (req, res) => {
    // let { filename, originalname, path } = req.file;
    let filename;
    if(req.body.image){
      filename=req.body.image;
    }
    else{
      filename = req.file;
    }
    console.log(req.file);
    console.log(req.body);
    let brand_name = req.body.brand_name;
    let status_id = req.body.status_id;
    let user_id = req.body.user_id;
    let brand_id = req.body.brand_id;
    let qr = `UPDATE brand SET name='${brand_name}', img='${filename}',status_id='${status_id}',user_id='${user_id}' WHERE brand_id='${brand_id}' `;
    console.log(qr)
    db.query(qr, (err, result) => {
      res.send({
        message: "single brand data updated successfully..",
        status: true,
      });
    });
  });

  
  // get single brand data - end here
  
  // get single brand start here
  // get all brand data
  server.get("/viewBrandById/:brand_id", (req, res) => {
    const {
      params: { brand_id },
    } = req;
    let qr = `select * from brand where brand_id='${brand_id}'`;
    db.query(qr, (err, result) => {
      if (result.length > 0) {
        res.send({
          message: "get all brand details",
          data: result,
          status: true,
        });
      }
    });
  });
  
  
  
  // all BRAND CRUD OPERATION END HERE



