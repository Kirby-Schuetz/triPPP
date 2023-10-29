// Require Client from pg
const { Client } = require('pg');

const client = new Client('postgres://localhost:5432/trippp');

// Export for use in other files
module.exports = client;
