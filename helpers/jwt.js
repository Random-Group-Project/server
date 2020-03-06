const jwt = require("jsonwebtoken");

module.exports = {
  generateToken(payload) {
    return jwt.sign(payload, process.env.SECRET);
  },

  verifyToken(token) {
    const SECRET = process.env.SECRET
    return jwt.verify(token, SECRET)
  }
};
