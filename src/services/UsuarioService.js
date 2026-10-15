const prisma = require("../databases/prisma");
const bcrypt = require("bcrypt");

class UsuarioService{

    async create({nome, email, password, role}){
        const usuario = await prisma.usuario.create({
            data:{
                email,
                password: await bcrypt.hash(password, 10),
                role,

                pessoa:{
                    create:{
                        nome
                    }
                }
            },
            select:{
                id:true,
                email: true,

                pessoa:{
                    select:{
                        nome: true
                    }
                }
            }
        });

        return  usuario;
    }
}

module.exports = new UsuarioService();
