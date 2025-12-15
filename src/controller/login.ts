import jwt from "jsonwebtoken"
import type { Request, Response } from "express"
import user from "../mockdata/data.js"

const KEY_TOKEN = process.env.SECRET_TOKEN



class Login {
  login (req:Request, res:Response):any {
    console.log(KEY_TOKEN)
    const {email, senha} = req.body
    // const {email, senha} = req.body ?? { "email": "beatriz.ramos@example.com", "senha": "B3atriz#2025"}

    const [usuario] = user.filter(user => user.email == email)
    console.log(usuario)
    if(!email || email !== usuario?.email) {
      console.log(usuario?.email)
      return res.status(401).json({error: "Usuario não encontrado"})
    }
    
    if(!senha || senha !== usuario?.senha) {
      console.log(usuario?.senha)
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

    console.log("token", token)
    
    res.json({token}) 
  }
}

export default new Login;