import jwt from "jsonwebtoken"
import type { Request, Response } from "express"
const KEY_TOKEN = process.env.SECRET_TOKEN

module.exports = (req:Request, res:Response, next:any) => {
  console.log(KEY_TOKEN)
  const authHeader = req.headers['authorization']

  if (!authHeader) {
    return res.status(401).json({error:"Token não fornecido"})
  }

  const token = authHeader?.split(" ")[1];

  if(!token) {
    return res.status(401).json({error:"token invalido"})
  }

  if(!KEY_TOKEN) {
      throw new Error ("SECRET_TOKEN não encontrado")
    }

  jwt.verify(token, KEY_TOKEN, (err:any, decoded:any) => {
    if (err)
      return res.status(401).json({ error: "Token inválido" });

    //@ts-ignore
    req.userId = decoded.id;
    next();
  });

}