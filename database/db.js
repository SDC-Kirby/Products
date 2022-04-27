const { Client } = require('pg');
const fs = require('fs');
const config = require('../config');

const db = new Client({
  user: 'postgres',
  host: '54.153.24.197',
  database: 'sdc',
  password: '',
  port: 5432,
});

db.connect();

module.exports = db;
