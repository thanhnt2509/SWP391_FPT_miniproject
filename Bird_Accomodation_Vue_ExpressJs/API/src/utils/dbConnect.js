const config = require('../config/config');
const knex = require('knex');

const connection = config.database;

const db = knex({
    client: 'mssql',
    connection: connection,
});

module.exports = db;
