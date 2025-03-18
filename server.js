const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const saltRounds = 10; // For bcrypt password hashing
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Initialize MySQL connection
const db = mysql.createConnection({
  host: 'db',
  user: 'user',
  password: 'password', // Replace with the correct password
  database: 'student_login_info'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1); // Gracefully exit if there's an error
  }
  console.log('Connected to MySQL database');
});

// Endpoint: Fetch all students
app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching students');
      return;
    }
    res.send(results);
  });
});

// Endpoint: Add a new student with hashed password
app.post('/students', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const query = 'INSERT INTO students (username, password) VALUES (?, ?)';
    db.query(query, [username, hashedPassword], (err, results) => {
      if (err) {
        res.status(500).send('Error inserting student');
        return;
      }
      res.status(201).send('Student added successfully');
    });
  } catch (error) {
    res.status(500).send('Error processing request');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
