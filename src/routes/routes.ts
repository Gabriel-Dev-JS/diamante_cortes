import { Router, type Request, type Response } from "express"
// import cadastro from "../controller/cadastro"
import { ControllerCadastroUsuario } from "../modulo-auth/authController/cadastroController"
import ControllerLogin from "../modulo-auth/authController/loginController"
//@ts-ignore
import authMiddleware from "../middleware/authMiddleware"
// import ControllerCadastroUsuario from "../controller/cadastro"

const controllerCadastro = new ControllerCadastroUsuario()

const routes = Router()

routes.post('/login', ControllerLogin.login)
routes.post('/cadastrarUsuario', controllerCadastro.cadastrarUser)
// routes.post('/cadastrarUsuario', cadastro.cadastrarUsuario)

routes.get('/', (req:Request, res:Response)=> {
  res.send("olaaaaaa").status(200)
})

routes.get('/pagamento', authMiddleware, (req:Request, res:Response) => {
  res.send("Rota Teste").status(200)
})


export { routes }
