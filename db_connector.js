const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'MyDB2526!',
  database: 'prog_js_DB',
  waitForConnection: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;

