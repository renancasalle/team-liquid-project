var database = require("../database/config")

function autenticar(email, senha) {
    var instrucao = `
        SELECT idUsuario, email, nick FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(email, senha, nick) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (email, senha, nick) VALUES ('${email}', '${senha}', '${nick}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar
};