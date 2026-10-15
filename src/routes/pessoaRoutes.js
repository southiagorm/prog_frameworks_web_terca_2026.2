const express = require("express");
const pessoaController = require("../controllers/PessoaController");
const validarPessoa = require("../middlewares/validarPessoa");

const router = express.Router();

router.get("/",(request, response, next)=>{
    console.log("Executando antes do findMany");
    next();
}, pessoaController.findMany);
router.post("/", validarPessoa, pessoaController.create);

module.exports = router;
