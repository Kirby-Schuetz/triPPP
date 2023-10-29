const client = require('../client');

const createPlace = async ({
  googlePlaceId,
  coord,
  vibes,
}) => {
  const { rows: [place] } = await client.query(
    `
    INSERT INTO places(google_place_id, coord, vibes)
    VALUES($1, $2, $3)
    RETURNING *`,
    [googlePlaceId, coord, vibes],
  );
  return place;
};

module.exports = {
  createPlace,
};
