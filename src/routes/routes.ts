import { Router, type Request, type Response } from "express"
import cadastro from "../controller/cadastro"
import Login from "../controller/login"
//@ts-ignore
import authMiddleware from "../middleware/authMiddleware"

const routes = Router()

routes.post('/login', Login.login)
routes.post('/cadastrarUsuario', cadastro.cadastrarUsuario)

routes.get('/', (req:Request, res:Response)=> {
  res.send("olaaaaaa").status(200)
})

routes.get('/pagamento', authMiddleware, (req:Request, res:Response) => {
  res.send("Rota Teste").status(200)
})


export { routes }
