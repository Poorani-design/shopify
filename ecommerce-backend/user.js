const { server, bodyParser, mysql, express } = require('./index.js');

server.post("/adminUserLoginAPI", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
  
    let qr = `SELECT * FROM admin_users WHERE username='${username}' and password='${password}' AND status_id=1`;
    db.query(qr, (err, result) => {
        if (err) {
        console.log("Error : ", err);
        return err;
        }
        if (result.length > 0) {
        res.send({
            status: true,
            message: "login successfully",
            data: result,
        });
        } else {
        res.send({
            status: false,
        });
        }
    });
  });
  server.get("/adminuser", (req, res) => {
    let qr = "select * from admin_users";
    db.query(qr, (err, result) => {
        console.log(result);
        if (err) {
        console.log("Error : ", err);
        return err;
        }
        if (result.length > 0) {
        res.send({
            message: "get all user details",
            data: result,
        });
        }
    });
  });