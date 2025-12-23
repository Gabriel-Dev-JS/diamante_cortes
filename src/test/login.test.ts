import { describe, expect, it, test } from '@jest/globals';
import request from "supertest"
import app from '../app';

describe('verify authentication for login',() => {
  it("Verificar a existencia do usuario", async () => {

    const user = {
      "id": 1,
      "nome": "Ana Souza",
      "email": "ana.souza@example.com",
      "senha": "AnaS!2025#"
    }
    
    const response = await request(app.routes).post('/login').send(user)
    expect(response.statusCode).toBe(200)
  })
})