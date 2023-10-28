const client = require("./client");

const { createTrip, getAllTrips } = require("./helpers/trips");
const { createJournal } = require("./helpers/journals");
const { createItineraryitem } = require("./helpers/itineraryitems");
const { createUser } = require("./helpers/users");
// const { createGroup } = require("./helpers/groups");
const { createGroupmemb } = require("./helpers/groupmembs");
const { createLocation } = require("./helpers/locations");
// destructuring it so we can pull in each array separately

const {
  users,
  locations,
  trips,
  journals,
  itineraryitems,
  groupmembs,
  // groups,
} = require("./seedData.js");

// drop tables
const dropTables = async () => {
  try {
    console.log("tables dropping!");
    // we are calling upon client connection to make query to db
    // took out locations
    await client.query(`
      DROP TABLE IF EXISTS users cascade;
      DROP TABLE IF EXISTS trips cascade;
      DROP TABLE IF EXISTS itineraries cascade;
      DROP TABLE IF EXISTS itineraryitems cascade;
      DROP TABLE IF EXISTS places cascade;
      DROP TABLE IF EXISTS groups cascade;
      DROP TABLE IF EXISTS group_members cascade;
    `);
    console.log("tables dropped!");
  } catch (error) {
    throw error;
  }
};


const createTablesQuery = `
  CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email varchar(255) UNIQUE NOT NULL,
    first_name varchar(255),
    last_name varchar(255),
    profile_picture_url VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
  );

  CREATE TABLE groups (
    group_id SERIAL PRIMARY KEY,
    group_name VARCHAR(255)
  );

  CREATE TABLE group_members (
    membership_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    group_id INT REFERENCES groups(group_id)
  );

  CREATE TYPE vibes AS ENUM ('chill', 'shop', 'local', 'party', 'outdoors');
  CREATE TABLE places (
    place_id SERIAL PRIMARY KEY,
    coord POINT,
    google_place_id varchar(255),
    vibes vibes[]
  );
`;
const createTables = async () => {
  try {
    console.log("tables are being created!");
    await client.query(createTablesQuery);
  } catch (error) {
    throw error;
  }
};

const seedDb = async () => {
  try {
    client.connect();
    // drop tables if they exist
    await dropTables();
    // create tables
    await createTables();
  } catch (error) {
    console.error(error)
  } finally {
    client.end();
  }
}

seedDb();
