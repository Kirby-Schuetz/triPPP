const chai = require('chai');
const sinon = require('sinon');
const client = require('../../../db/client');
const { createUser, getUserBySub } = require('../../../db/repository/usersRepository');

const { expect } = chai;

describe('Users Repository Tests', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Should create a user', async () => {
    const clientStub = sinon.stub(client, 'query');
    const fakeUser = {
      email: 'test@example.com',
      profilePicture: 'http://example.com/image.jpg',
      createdAt: '2023-10-28T20:32:53.675Z',
      updatedAt: '2023-10-28T20:32:53.675Z',
      sub: 'auth0sub123',
    };

    clientStub.withArgs(sinon.match.string, sinon.match.array).resolves({ rows: [fakeUser] });

    const result = await createUser(fakeUser);
    expect(result).to.deep.equal(fakeUser);
  });

  it('Should handle an error creating a user', async () => {
    const clientStub = sinon.stub(client, 'query');
    clientStub.rejects(new Error('Error creating user'));

    const fakeUserWithoutSub = {
      email: 'test@example.com',
      profilePicture: 'http://example.com/image.jpg',
      createdAt: '2023-10-28T20:32:53.675Z',
      updatedAt: '2023-10-28T20:32:53.675Z',
    };

    try {
      await createUser(fakeUserWithoutSub);
      expect.fail('Expected an error to be thrown');
    } catch (error) {
      expect(error.message).to.equal('Error creating user');
    }
  });

  it('should get a user by sub', async () => {
    const clientStub = sinon.stub(client, 'query');
    const fakeUser = {
      email: 'test@example.com',
      profilePicture: 'http://example.com/image.jpg',
      createdAt: '2023-10-28T20:32:53.675Z',
      updatedAt: '2023-10-28T20:32:53.675Z',
      sub: 'auth0sub123',
    };

    clientStub.withArgs(sinon.match.string, sinon.match.array).resolves({ rows: [fakeUser] });

    const result = await getUserBySub(fakeUser.sub);
    expect(result).to.deep.equal(fakeUser);
  });

  it('Should return an empty array when user not found', async () => {
    const clientStub = sinon.stub(client, 'query');
    clientStub.withArgs(sinon.match.string, sinon.match.array).resolves({ rows: [] });

    const result = await getUserBySub('12345');
    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.undefined;
  });
});
