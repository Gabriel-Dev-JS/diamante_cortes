import type { Request, Response } from "express";
import { LoginUserUseCase } from "../useCases/loginUser";

class ControllerLogin {
  async login(req:Request, res:Response) {
    const loginUserUseCase = new LoginUserUseCase()
    try {
      const login = await loginUserUseCase.logarUser(req.body)
      return res.status(200).json({"Usuario autenticado": login})
    }catch(err:any) {
      console.error("Erro")
      res.status(409).json({"Erro ao autenticar usuario": err})
    }
  }
}

export default new ControllerLogin;