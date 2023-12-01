var database = require("../database/config")

function registrar(time, fkUsuario) {
    var instrucao = `
    INSERT INTO pontuacao (tempo, fkUsuario) VALUES ('${time}', '${fkUsuario}')`
    return database.executar(instrucao);
}
module.exports = {
    registrar
};