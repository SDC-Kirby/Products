const { Client } = require('pg');
const fs = require('fs');
const CONFIG = require('../config');

const db = new Client({
  user: 'postgres',
  host: '13.56.213.219',
  database: 'sdc',
  password: CONFIG.PASSWORD,
  port: 5432,
});

db.connect();

module.exports = db;
