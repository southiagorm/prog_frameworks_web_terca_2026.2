const {validarToken} = require("../utils/jwt");

module.exports = (request, response, next) => {

    //Bearer .....
    const authorization = request.headers.authorization;

    if(!authorization){
        return response.status(401).json({error: "Token não informado"});
    }

    const [tipo, token, extra] = authorization.split(" ");

    if(tipo !== "Bearer" || !token || extra){
        return response.status(401).json({error: "Token inválido"});
    }

    try{
        const payload = validarToken(token);
        next();
    }catch(err){
        return response.status(401).json({error: "Token inválido ou expirado"});
    }
}