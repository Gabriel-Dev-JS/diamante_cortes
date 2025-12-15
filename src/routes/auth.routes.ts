import { Router } from "express"
//@ts-ignore
import authMiddleware from "../middleware/authMiddleware.js"
import Login from "../controller/login.js"

const routes = Router()

// routes.use(authMiddleware)

// routes.post('/login', Login.login, authMiddleware)

// routes.get('/', (req:any, res:any) => {
//   res.send('Index')
// })

// routes.get('/teste', (req:any, res:any) => {
//   res.send("rotas teste")
// })

// routes.post('/login', Login.login)

export default routes