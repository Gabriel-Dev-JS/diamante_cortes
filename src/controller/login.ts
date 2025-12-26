import type { Request, Response } from "express"
import jwt from "jsonwebtoken"
import user from "../mockdata/data"

const KEY_TOKEN = process.env.SECRET_TOKEN

class Login {
  login(req:Request, res:Response) {

    const {email, senha} = req.body 
    const [usuario] = user.filter(user => user.email == email)

    // if(req.body == undefined) return res.status(500).json({Erro: "Corpo da requisição não encontrado"})

    if(!email || email !== usuario?.email) {
      return res.status(401).json({error: "Usuario não encontrado"})
    }
    
    if(!senha || senha !== usuario?.senha) {
      return res.status(401).json({error: "Usuario não encontrado"})
    }

    if(!KEY_TOKEN) {
      throw new Error ("SECRET_TOKEN não encontrado")
    }

    const token = jwt.sign(
      {userId:usuario?.id},
      KEY_TOKEN,
      {expiresIn: '1h'}
    )

    res.json({token}).status(200)
  }
}

export default new Login;