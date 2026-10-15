const {Router} = require("express");
const usuarioController = require("../controllers/UsuarioController");

const router = Router();

router.post("/", usuarioController.create);

module.exports = router;