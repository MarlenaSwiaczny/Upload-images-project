const express = require("express");
const actions = require("./actions.js");


const router = express.Router();
router.get("/", actions.homepage)


module.exports = router;