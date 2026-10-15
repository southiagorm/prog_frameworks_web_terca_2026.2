const pessoaService = require("../services/PessoaService");

class PessoaController{

    async findMany(request, response){
        let {page, pageSize} = request.query;
        page ||= 1;
        pageSize ||= 10;


        const pessoas = await pessoaService.findMany(page, pageSize);
        return response.status(200).json({pessoas});
    }

    async create(request, response){
        try{
            const pessoa = await pessoaService.create(request.body);
            return response.status(201).json({pessoa});
        }catch(e){
            return response.status(e.statusCode).json({error: e.message});
        }
    }
}

module.exports = new PessoaController();
