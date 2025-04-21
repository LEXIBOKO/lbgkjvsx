npm install pg



const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // замени на своего пользователя
  host: 'localhost',
  database: 'lms_db', // имя БД
  password: 'your_password',
  port: 5432,
});

module.exports = pool;



const db = require('./db');

async function testConnection() {
  try {
    const result = await db.query('SELECT * FROM users');
    console.log(result.rows);
  } catch (err) {
    console.error('DB Error:', err);
  } finally {
    db.end();
  }
}

testConnection();
