var login = require("../Models/login");
var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");

router.post("/", function (req, res, next) {
  login.verifyUserById(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      console.log(rows.length);
      if (rows.length === 0) {
        res.status(402).send(`Please Enter Valid Credentials`);
      } else {
        let payload = { subject: req.body.email };
        let token = jwt.sign(payload, "secretKey", { expiresIn: 3 * 100 });
        res.json({ token });
      }
    }
  });
});

module.exports = router;
