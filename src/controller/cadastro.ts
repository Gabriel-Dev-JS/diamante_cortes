import { type Request, type Response } from "express";
import user from "../mockdata/data";

class Cadastro {
    cadastrarUsuario(req: Request, res: Response) {

        const {email, senha, nome} = req.body;

        const [usuario] = user.filter(val => val.email == email || val.senha == senha)

        if(usuario?.email || usuario?.senha){
            return res.status(409).json({Mensagem:"Usuário já cadastrado"})
        }

        const userIds = user.map(user => user)
        const idUsers = userIds[userIds.length - 1]

        user.push(
           {
            "id":  Number(idUsers?.id) + 1,
            "nome": nome,
            "email": email,
            "senha": senha
            }
        )

        return res.status(201).json({Mensagem:"Usuario Cadastrado"})
    }
}

export default new Cadastro