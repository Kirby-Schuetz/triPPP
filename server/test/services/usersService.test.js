const chai = require('chai');
const sinon = require('sinon');
const { createUser, getUser, listUsers } = require('../../services/usersService');
const usersRepository = require('../../db/repository/usersRepository');

const { expect } = chai;

describe('Users Service Tests', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Should return a user object', async () => {
    const getUserBySubStub = sinon.stub(usersRepository, 'getUserBySub');
    const fakeUser = {
      email: 'test@example.com',
      profilePicture: 'http://example.com/image.jpg',
      createdAt: '2023-10-28T20:32:53.675Z',
      updatedAt: '2023-10-28T20:32:53.675Z',
      sub: 'auth0sub123',
    };

    getUserBySubStub.resolves(fakeUser);
    const result = await getUser('auth0sub123');
    expect(result).to.deep.equal(fakeUser);
  });

  it('Should throw an error when getUserBySub fails', async () => {
    const getUserBySubStub = sinon.stub(usersRepository, 'getUserBySub');
    getUserBySubStub.rejects(new Error('Error fetching user'));

    try {
      await getUser('12345');
    } catch (error) {
      expect(error.message).to.equal('Error fetching user');
    }
  });

  it('Should create a user', async () => {
    const createUserStub = sinon.stub(usersRepository, 'createUser');
    const fakeUser = {
      email: 'test@example.com',
      profilePicture: 'http://example.com/image.jpg',
      createdAt: '2023-10-28T20:32:53.675Z',
      updatedAt: '2023-10-28T20:32:53.675Z',
      sub: 'auth0sub123',
    };
    createUserStub.resolves(fakeUser);
    const result = await createUser(fakeUser);
    expect(result).to.deep.equal(fakeUser);
  });

  it('Should throw an error when creating a user', async () => {
    const usersRepositorycreateUserStub = sinon.stub(usersRepository, 'createUser');
    usersRepositorycreateUserStub.rejects(new Error('Error creating user'));
    const fakeUserWithoutEmail = {
      profilePicture: 'http://example.com/image.jpg',
      createdAt: '2023-10-28T20:32:53.675Z',
      updatedAt: '2023-10-28T20:32:53.675Z',
      sub: 'auth0sub123',
    };

    try {
      await createUser(fakeUserWithoutEmail);
    } catch (error) {
      expect(error.message).to.equal('Error creating user');
    }
  });

  it('Should return a list of users', async () => {
    const listUsersStub = sinon.stub(usersRepository, 'listUsers');
    const fakeUsers = [
      {
        userId: 1,
        email: 'test@example.com',
        profilePicture: 'http://example.com/image.jpg',
        createdAt: '2023-10-28T20:32:53.675Z',
        updatedAt: '2023-10-28T20:32:53.675Z',
        sub: 'auth0sub123',
      },
      {
        userId: 2,
        email: 'test@example.com',
        profilePicture: 'http://example.com/image.jpg',
        createdAt: '2023-10-28T20:32:53.675Z',
        updatedAt: '2023-10-28T20:32:53.675Z',
        sub: 'auth0sub123',
      },
    ];
    listUsersStub.resolves(fakeUsers);
    const result = await listUsers();
    expect(result).to.deep.equal(fakeUsers);
  });
});
