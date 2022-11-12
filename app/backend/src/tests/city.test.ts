import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { cities, cityId } from './mocks/city'

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;


describe('Testa a rota /city', () => {

  it('Quando entramos na tela de cidades, retorne todas cidades e um status 200', async () => {
    const chaiHttpResponse = await chai.request(app)
    .get('/city').send();

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.eql(cities);
  });
});

describe('Testa a rota /city/id', () => {
  it('Quando escolhemos uma cidade, retorne a cidade escolhida e um status 200', async () => {
    const chaiHttpResponse = await chai.request(app)
    .get('/city/2').send();

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.eql(cityId);
  });
});