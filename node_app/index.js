const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
  host: 'localhost',
  user: 'devops',
  password: 'admin123',
  database: 'sharedappdb'
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT name FROM app_schema.devs');
    const names = result.rows.map(row => `<li>${row.name}</li>`).join('');
    res.send(`<h1>Node.js app with shared DB is up and running!</h1><ul>${names}</ul>`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(3000, () => console.log('Node.js app listening on port 3000'));

