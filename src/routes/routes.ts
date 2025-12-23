import { Router, type Request, type Response } from "express"
//@ts-ignore
import authMiddleware from "../middleware/authMiddleware"
import Login from "../controller/login"

const routes = Router()

routes.post('/login', Login.login)

routes.get('/', (req:Request, res:Response)=> {
  res.send("olaaaaaa").status(200)
})

routes.get('/pagamento', authMiddleware, (req:Request, res:Response) => {
  res.send("Rota Teste").status(200)
})


export {routes};