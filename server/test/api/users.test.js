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
    const response = await request
      .post('/api/users')
      .send({});

    expect(response.status).to.equal(400);
  });

  it('Should return a status 201 and the newly created user', async () => {
    const createUserStub = sinon.stub(usersService, 'createUser');
    const fakeUser = {
      user_id: 1,
      first_name: undefined,
      last_name: undefined,
      email: 'test@example.com',
      profilePicture: 'http://example.com/image.jpg',
      createdAt: '2023-10-28T20:32:53.675Z',
      updatedAt: '2023-10-28T20:32:53.675Z',
      sub: 'auth0sub123',
    };
  });
});
