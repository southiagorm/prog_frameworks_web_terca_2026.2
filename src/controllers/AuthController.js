const authService = require("../services/AuthService");

class AuthController{

    async login(request, response){
        try{
            const token = await authService.login(request.body);
            return response.status(200).json({token});
        }catch(err){
            return response.status(err.statusCode || 500).json({error: err.message});
        }
    }
}

module.exports = new AuthController();