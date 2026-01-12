import { describe, expect, it } from '@jest/globals';
import request from "supertest";
import { App } from '../../app';


describe('verify authentication for login',() => {

  const app = new App().app
  
  it("Verificar a existencia do usuario", async () => {

    const user = {
      "id": 1,
      "nome": "Ana Souza",
      "email": "ana.souza@example.com",
      "senha": "AnaS!2025#"
    }
    
    const response = await request(app).post('/login').send(user)
    expect(response.statusCode).toEqual(200)
  })
})