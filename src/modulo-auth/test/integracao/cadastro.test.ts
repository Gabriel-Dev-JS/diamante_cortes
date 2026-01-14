import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { App } from "../../../app";

describe("Cadastro", ()=> {
    it("cadastrar novo usuario", async ()=> {
        const app = new App().app
        const usuario = {
            "nome": "Ana Souza",
            "email": "ana.souza@exampl.com",
            "senha": "AnaS!2025"
        }

        const response = await request(app).post("/cadastrarUsuario").send(usuario)

        expect(response.statusCode).toEqual(201)
    })
})