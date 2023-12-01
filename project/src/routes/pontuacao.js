var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/registrar/:fkUsuario", function (req, res) {
    pontuacaoController.registrarDados(req, res);
})

module.exports = router;