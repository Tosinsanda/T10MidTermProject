const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
  host: '172.31.27.133',
  user: 'devops',
  password: 'admin123',          // ⬅︎ move to process.env in production!
  database: 'sharedappdb'
});

app.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT name FROM app_schema.devs');
    const names = rows.map(r => `<li>${r.name}</li>`).join('');

    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Node.js App</title>
  <style>
    body { background:#f4f4f4; font-family:'Segoe UI',sans-serif; text-align:center; padding-top:50px; }
    h1   { color:#2c3e50; }
  </style>
</head>
<body>
  <h1>This was done by Tosin Sanda 🚀</h1>
  <p>Node.js App is live!</p>
  <ul>${names}</ul>
</body>
</html>`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});

app.listen(3000, () => console.log('Node.js app listening on port 3000'));

