const { Client } = require('pg');

const client = new Client(`postgres://localhost:5432/`);

async function createTestDatabase(client) {
    try {
        await client.connect();
        await client.query(`CREATE DATABASE trippptest`);
    } catch(error) {
        throw error;
    } finally {
        client.end()
    }
}

module.exports = {
    client,
    createTestDatabase
}