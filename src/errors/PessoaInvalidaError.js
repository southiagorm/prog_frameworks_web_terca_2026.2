const ApiError = require("./ApiError");

class PessoaInvalidaError extends ApiError{
    constructor(message="Nome e Email são Obrigatórios", statusCode=400){
        super(message, statusCode);
    }
}

module.exports = PessoaInvalidaError;
