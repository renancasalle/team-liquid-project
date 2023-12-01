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
module.exports = {
    registrarDados
}