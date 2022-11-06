import * as chai from 'chai';
import * as sinon from 'sinon';

import UserModel from '../database/models';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);


const { expect } = chai;

describe('Test Login', () => {
  describe('/login methot POST - authenticate', () => {
    before(async function() {
      sinon.stub(UserModel, 'findOne').resolves(mockedUsers[0] as any);
    });

    after(function() {
      (UserModel.findOne as sinon.SinonStub).restore();
    });
  })

  let chaiHttpResponse: Response;
  it('login como administrador', async () => {
    const { password, ...user } = mockedUsers[0];

    chaiHttpResponse = await chai
          .request(app)
          .post('/login')
          .send({ email: '', password: '' });

          expect(chaiHttpResponse.status).to.be.equal(200);
          expect(chaiHttpResponse.body.user).to.be.deep.equal(user);
          expect(chaiHttpResponse.body).to.have.property('token');
    })
});