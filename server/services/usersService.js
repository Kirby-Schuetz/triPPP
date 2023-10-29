const usersRepository = require('../db/repository/usersRepository');

async function getUser(id) {
  let user;

  try {
    user = await usersRepository.getUserBySub(id);
  } catch (error) {
    console.error('Get User Error: ', error.message);
  }
  return user;
}

async function createUser(userObj) {
  let user;
  try {
    user = await usersRepository.createUser(userObj);
    return user;
  } catch (error) {
    console.error('Create User Error: ', error.message);
  }
  return user;
}

module.exports = {
  getUser,
  createUser,
};
