var database = require("../database/config")

function registrar(time, fkUsuario) {
    var instrucao = `
    INSERT INTO pontuacao (tempo, fkUsuario) VALUES ('${time}', '${fkUsuario}')`
    return database.executar(instrucao);
}
function exibirRanking(){
    var instrucao = `
    select usuario.nick as nickname, pontuacao.tempo as tempo from pontuacao 
    join usuario on fkUsuario = idUsuario order by tempo;
    `
    return database.executar(instrucao);
}

module.exports = {
    registrar,
    exibirRanking
};