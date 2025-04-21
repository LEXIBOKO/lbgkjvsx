const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',        // ← имя пользователя БД
  host: 'localhost',
  database: 'Diplom',      // ← имя базы, которую ты создал в PgAdmin
  password: 'root', // ← пароль от PostgreSQL
  port: 5432,
});


module.exports = pool;
