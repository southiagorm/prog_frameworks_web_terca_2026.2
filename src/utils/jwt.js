const jwt = require("jsonwebtoken");

function gerarToken({id, email, role}){
    return jwt.sign({
        email, role
    },
    process.env.JWT_SECRET,
    {
        subject: String(id),
        expiresIn: "1h",
        algorithm: "HS256"
    });
}

function validarToken(token){

    return jwt.verify(
        token,
        process.env.JWT_SECRET,
        {
            algorithms: ["HS256"]
        }
    );

}

module.exports = {
    gerarToken, validarToken
}