const { Client } = require('pg');
const fs = require('fs');

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'sdc',
  password: '',
  port: 5432,
});

db.connect();

module.exports = db;
