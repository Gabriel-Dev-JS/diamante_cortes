import "dotenv/config";
import express from "express";
import Login from "./controller/login.js"
// import dotenv from "dotenv";
// dotenv.config();


//@ts-ignore
import authMiddleware from "../src/middleware/authMiddleware.js"
import authRoutes from "../src/routes/auth.routes.js"

const app = express();
app.use(express.json());

app.post("/login",  Login.login, authMiddleware);
// app.post("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
