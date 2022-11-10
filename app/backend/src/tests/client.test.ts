import { clients, clientId } from './mocks/client';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;


describe('Testa a rota /client', () => {

  it('Quando entramos na tela de clientes, retorne todos os clientes e um status 200', async () => {
    const chaiHttpResponse = await chai.request(app)
    .get('/client').send();

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.eql(clients);
  });
});

describe('Testa a rota GET /client/id', () => {
  it('Quando escolhemos uma cliente, retorne o cliente escolhida e um status 200', async () => {
    const chaiHttpResponse = await chai.request(app)
    .get('/client/10').send();

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.eql(clientId);
  });
});

describe('Testa a rota PATCH /client/id', () => {
  it('Quando tentamos atualizar um cliente sem body necessário, retorne um status 400 e uma messagem de erro', async () => {
    const chaiHttpResponse = await chai.request(app)
    .patch('/client/3').send({});

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.be.eql({
      "message": "All fields must be filled"
    });
  });
});