const express = require('express');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(express.json());

// === Получить всех пользователей ===
app.get('/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка при получении пользователей');
  }
});

// === Получить все курсы ===
app.get('/courses', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM courses');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка при получении курсов');
  }
});

// === Добавить пользователя ===
app.post('/add-user', async (req, res) => {
  const { full_name, email, password } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO users (full_name, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
      [full_name, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка при добавлении пользователя');
  }
});

// === Добавить курс ===
app.post('/add-course', async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO courses (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка при добавлении курса');
  }
});

// === Запуск сервера ===
app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
