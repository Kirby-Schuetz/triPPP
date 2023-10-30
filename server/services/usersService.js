const usersRepository = require('../db/repository/usersRepository');

async function getUser(id) {
  try {
    const user = await usersRepository.getUserBySub(id);
    return user;
  } catch (error) {
    /* istanbul ignore next */
    console.error('Get User Error: ', error.message);
    throw error;
  }
}

async function createUser(userObj) {
  try {
    const user = await usersRepository.createUser(userObj);
    return user;
  } catch (error) {
    /* istanbul ignore next */
    console.error('Create User Error: ', error.message);
    throw error;
  }
}

module.exports = {
  getUser,
  createUser,
};
