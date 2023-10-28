const client = require("../client");

const createPlace = async ({
    google_place_id,
    coord,
    vibes
  }) => {
    try {
      const {
        rows: [location],
      } = await client.query(
        `
          INSERT INTO places(google_place_id, coord, vibes)
          VALUES($1, $2, $3)
          RETURNING *;
          `,
        [google_place_id, coord, vibes]
      );
      return location;
    } catch (error) {
      throw error;
    }
  };

module.exports = {
    createPlace
}