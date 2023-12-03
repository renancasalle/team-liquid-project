var express = require("express");
var router = express.Router();

var feedbackController = require("../controllers/feedbackController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/adicionar/:idUsuario", function (req, res) {
    feedbackController.adicionarFeedback(req, res);
});

router.get("/avaliacao/", function(req, res){
    feedbackController.contarAvaliacaoMaxima(req, res)
});

module.exports = router;