import "dotenv/config";
import express, { type Application } from "express";
import { routes } from "./routes/routes";

class App {

  private app: Application

  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  config():void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true}))
  }

  routes():void {
    this.app.use(routes)
  }

  listen(port: number):void {
    this.app.listen(port, ()=> console.log(`Servidor rodando na porta: http://localhost:${port}`))
  }
}

export default new App