import jwt from "jsonwebtoken";
import user from "../../mockdata/data";
import type { PropsBody } from "./createUserUseCase";

const KEY_TOKEN = process.env.SECRET_TOKEN


class LoginUserUseCase {
    async logarUser(data:PropsBody) {
        
      const [usuario] = user.filter(user => user.email == data?.email)

      // if(req.body == undefined) return res.status(500).json({Erro: "Corpo da requisição não encontrado"})

      if(!data?.email || data?.email !== usuario?.email) {
        throw new Error ("Email não encontrado")
      }
      
      if(!data?.senha || data?.senha !== usuario?.senha) {
        throw new Error ("Senha não encontrada")
      }

      if(!KEY_TOKEN) {
        throw new Error ("SECRET_TOKEN não encontrado")
      }

      const token = jwt.sign(
        {userId:usuario?.id},
        KEY_TOKEN,
        {expiresIn: '1h'}
      )

      return token
    }
}

export { LoginUserUseCase };

