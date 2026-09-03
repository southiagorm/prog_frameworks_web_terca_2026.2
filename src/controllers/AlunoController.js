const alunoService = require("../services/AlunoService");

class AlunoController{

    async create(request, response){
        const aluno = await alunoService.create(request.body);
        return response.status(201).json({aluno});
    }
}

module.exports = new AlunoController();