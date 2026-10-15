const ApiError = require("./ApiError");

class CredenciaisInvalidaError extends ApiError{
    constructor(message="E-mail ou senha inválidos", statusCode=401){
        super(message, statusCode);
    }
}

module.exports = CredenciaisInvalidaError;