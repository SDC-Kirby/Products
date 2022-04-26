const { Client } = require('pg');
const fs = require('fs');
const config = require('../config');

const db = new Client({
  user: 'rvtaylor',
  host: 'localhost',
  database: 'sdc',
  password: config.PASSWORD,
  port: 5432,
});

db.connect();

module.exports = db;
