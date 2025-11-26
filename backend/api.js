const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: { encrypt: true, trustServerCertificate: false }
};

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    await sql.connect(config);
    const result = await sql.query`INSERT INTO Contacts (Name, Phone, Email, Message) VALUES (${name}, ${phone}, ${email}, ${message})`;
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API running on port ${port}`));
