var database = require("../database/config")


function adicionarFeedback(star, fkUsuario){

    var instrucao = `
    insert into feedback (feedback, fkUsuario) values
    ('${star}', '${fkUsuario}')
    `
    return database.executar(instrucao)
}

function contarAvaliacaoMaxima(){
    var instrucao = `
    select count(feedback) as qtdFeedback from feedback where feedback = 5;
    `
    return database.executar(instrucao);
}

function verificarAvaliacao(idUsuario){
    
    var instrucao = `
    select feedback.fkUsuario from feedback where fkUsuario = ${idUsuario} limit 1;	
    `
    return database.executar(instrucao);
}

module.exports = {
    adicionarFeedback,
    contarAvaliacaoMaxima,
    verificarAvaliacao
};