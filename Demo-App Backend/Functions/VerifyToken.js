var jwt = require("jsonwebtoken");
var createError = require("http-errors");

module.exports = {
  verifyToken: (req, res, next) => {
    if (!req.headers.authorization) {
      return next(createError.Unauthorized());
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secretKey", (err, payload) => {
      if (err) {
        return next(createError.Unauthorized());
      }
      req.payload = payload;
      next();
    });
  },
};
