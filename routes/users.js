const router = require("express").Router();
const User = require("../controllers/UserController");

router.post("/register", User.register);
router.post("/login", User.login);
router.get("/googlesign", User.gsignin);

module.exports = router;
