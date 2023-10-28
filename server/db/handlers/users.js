const client = require("../client");

const createUser = async ({
    email,
    profile_picture,
    created_at,
    updated_at,
    sub
  }) => {
    // Parse the input timestamps
    const createdAt = new Date(created_at);
    const updatedAt = new Date(updated_at);

    // Format the timestamps in a way that PostgreSQL accepts
    const createdAtFormatted = createdAt.toISOString(); // Example: "2023-10-28T20:32:53.675Z"
    const updatedAtFormatted = updatedAt.toISOString();

    try {
      const {
        rows: [user],
      } = await client.query(
        `
          INSERT INTO users(email, profile_picture_url, created_at, updated_at, auth0_sub)
          VALUES($1, $2, $3, $4, $5)
          RETURNING *;
          `,
        [email, profile_picture, created_at, updated_at, sub]
      );
      return user;
    } catch (error) {
      throw error;
    }
};

const getUserBySub = async(sub) => {
  console.log("DB Handler: ", sub);
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT *
        FROM users
        WHERE auth0_sub = $1
      `,
      [sub]
    );
    return user;
  } catch(error) {
    throw error;
  }
}

module.exports = {
    createUser,
    getUserBySub
}