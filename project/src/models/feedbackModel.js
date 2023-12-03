var database = require("../database/config")

function adicionarFeedback(star, fkUsuario){

    var instrucao = `
    insert into feedback (feedback, fkUsuario) values
    ('${star}', '${fkUsuario}')
    `
    return database.executar(instrucao)
}
module.exports = {
    adicionarFeedback
};