var express = require("express");
var user = require("../Models/user");
var router = express.Router();
var multer = require("multer");
var path = require("path");
const { verifyToken } = require("../Functions/VerifyToken");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/");
  },
  filename: (req, file, cb) => {
    x = file.originalname + "-" + Date.now() + path.extname(file.originalname);
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });

router.get("/", verifyToken, (req, res, next) => {
  user.getAlluser((err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get("/:id", verifyToken, (req, res) => {
  user.getuserByid(req.params.id, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("", upload.single("img"), verifyToken, (req, res) => {
  if (/^[a-zA-Z 0-9]*$/.test(req.body.name) == false) {
    res.status(602).send("Please Dont use special character");
  } else {
    user.addnewUser(req.body, req.file.filename, (err, rows) => {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.delete("/:id", (req, res) => {
  user.deleteUser(req.params.id, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/", (req, res) => {
  user.updateuserwithoutIMG(req.body, (err, rows) => {
    console.log(req.body);
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
