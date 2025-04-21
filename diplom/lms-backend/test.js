const db = require('./db');

async function testConnection() {
  try {
    const result = await db.query('SELECT * FROM users');
    console.log(result.rows); // покажет пользователей (если есть)
  } catch (err) {
    console.error('Ошибка подключения:', err);
  } finally {
    db.end();
  }
}

testConnection();
