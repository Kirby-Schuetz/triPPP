const chai = require('chai');
const sinon = require('sinon');
const supertest = require('supertest');
const createServer = require('../../index');
const usersService = require('../../services/usersService');

const { expect } = chai;

describe('User API Path Tests', () => {
  let request;
  let server;
  let listener;

  beforeEach(() => {
    const result = createServer();
    server = result.server;
    listener = result.listener;
    request = supertest(server);
  });

  afterEach(async () => {
    sinon.restore();
    if (listener) {
      await new Promise((resolve, reject) => {
        listener.close((err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        });
      });
    }
  });

  it('Should return a 400 status when required fields are missing', async () => {
    // createUserStub = sinon.stub(usersService, )
    const response = await request
      .post('/api/users')
      .send({});

    expect(response.status).to.equal(400);
  });
});
