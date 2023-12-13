var feedbackModel = require("../models/feedbackModel");

function adicionarFeedback(req, res){

    var star = req.body.starServer
    var fkUsuario = req.params.idUsuario
    feedbackModel.adicionarFeedback(star, fkUsuario)
    .then(function(result){
        res.status(200).json(result)
    }).catch(function(error){
        console.log(error);
    })
}

function contarAvaliacaoMaxima(req, res){
    feedbackModel.contarAvaliacaoMaxima()
    .then(function(result){
        res.status(200).json(result)
    }).catch(function(error){
        console.log(error);
    })
}

function verificarAvaliacao(req, res){
    var idUsuario = req.params.idUsuario
    feedbackModel.verificarAvaliacao(idUsuario)
    .then(function(result){
        res.status(200).json(result)
    }).catch(function(error){
        console.log(error);
    })
}

module.exports = {
    adicionarFeedback,
    contarAvaliacaoMaxima,
    verificarAvaliacao
}

