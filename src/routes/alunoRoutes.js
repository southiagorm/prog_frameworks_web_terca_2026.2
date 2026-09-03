const express = require("express");
const alunoController = require("../controllers/AlunoController");

const router = express.Router();

router.post("/", alunoController.create);

module.exports = router;