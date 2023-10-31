const client = require('../client');

const createUser = async ({
  email,
  profilePicture,
  createdAt,
  updatedAt,
  sub,
}) => {
  // Parse the input timestamps
  const createdAtDate = new Date(createdAt);
  const updatedAtDate = new Date(updatedAt);

  // Format the timestamps in a way that PostgreSQL accepts
  const createdAtFormatted = createdAtDate.toISOString(); // Example: "2023-10-28T20:32:53.675Z"
  const updatedAtFormatted = updatedAtDate.toISOString();

  const { rows: [user] } = await client.query(
    `
      INSERT INTO users(email, profile_picture_url, created_at, updated_at, auth0_sub)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
    `,
    [email, profilePicture, createdAtFormatted, updatedAtFormatted, sub],
  );
  return user;
};

const getUserBySub = async (sub) => {
  const { rows: [user] } = await client.query(
    `
      SELECT *
      FROM users
      WHERE auth0_sub = $1
    `,
    [sub],
  );
  return user;
};

const listUsers = async () => {
  const { rows: [users] } = await client.query(
    `
      SELECT *
      FROM users;
    `,
  );
  return users;
};

// const updateUser = () => {

// }

module.exports = {
  createUser,
  getUserBySub,
  listUsers,
};
