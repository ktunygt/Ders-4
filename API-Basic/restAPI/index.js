const express = require("express");
const router = express.Router();

const isAuth = require("../middlewares/auth-control");

const home = require("./home");
const login = require("./auth/login");
const register = require("./auth/register");
const authControl = require("./authControl");
const testEmail = require("./testEmail");

router.get("/", home);
router.post("/login", login);
router.post("/register", register);
router.get("/authControl", isAuth, authControl);
router.get("/testEmail", testEmail);

module.exports = router;
