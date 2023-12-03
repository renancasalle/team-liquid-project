var pontuacaoModel = require("../models/pontuacaoModel");

function registrarDados(req, res){
    var time = req.body.timeServer
    var fkUsuario = req.params.fkUsuario

    pontuacaoModel.registrar(time, fkUsuario)
        .then(
            function (resultado) {
                res.status(201).send("vai corinthians")
            }
        ) //.catch(
          //  function (erro) {
          //      c
          //  }
        //)
}
function exibirRanking(req, res){
    pontuacaoModel.exibirRanking()
    .then(function(result){
        res.status(200).json(result)
    }).catch(function(error){
        console.log(error);
    })
}

function contarTempo(req, res){
    pontuacaoModel.contarTempo()
    .then(function(result){
        res.status(200).json(result)
    }).catch(function(error){
        console.log(error);
    })
}

module.exports = {
    registrarDados,
    exibirRanking,
    contarTempo
}