const prisma = require("../databases/prisma");
const CredenciaisInvalidaError = require("../errors/CredenciaisInvalidaError");
const {gerarToken} = require("../utils/jwt");
const bcrypt = require("bcrypt");

class AuthService{
    async login({email, password}){
        const usuario = await prisma.usuario.findUnique({
            where: {email}
        });

        if(!usuario){
            throw new CredenciaisInvalidaError();
        }

        const senhaValida = await bcrypt.compare(password, usuario.password);

        if(!senhaValida){
            throw new CredenciaisInvalidaError();
        }

        return gerarToken(usuario);
    }
}

module.exports = new AuthService();
