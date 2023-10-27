const express = require("express");
const { createNewStudent } = require("../controllers/students");

const router = express.Router();

router.post("/", createNewStudent);

module.exports = router;
