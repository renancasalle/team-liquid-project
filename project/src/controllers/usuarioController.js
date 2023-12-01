var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {     
                 
                    if (resultadoAutenticar.length == 0) {
                        res.status(403).send("E-mail e/ou senha inválidos!");
                    } else {
                        res.status(200).json(resultadoAutenticar);
                    }
                    
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var nick = req.body.nickServer;

    // Faça as validações dos valores
    if (nick == "") {
        res.status(400).send("Seu nick está inválido!");
    } else if (email == "") {
        res.status(400).send("Seu email está inválido!");
    } else if (senha == "") {
        res.status(400).send("Sua senha está inválido!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(email, senha, nick)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function registrarDados(req, res){
    var time = req.body.timeServer

    usuarioModel.registrarDados(time)
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
    autenticar,
    cadastrar,
    registrarDados
}