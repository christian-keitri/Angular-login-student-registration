const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');  // Add path module for resolving file paths

const app = express();
const port = 3000;

// Middleware
app.use(cors());  // Allow cross-origin requests from frontend
app.use(bodyParser.json());  // Parse JSON requests

// Example POST endpoint for login
app.post('/api/login', (req, res) => {
  const { userName, password } = req.body;

  // Simulate authentication (replace with real authentication logic)
  if (userName === 'admin' && password === 'admin') {
    res.json({ message: 'Login successful', user: { userName } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist', 'student-login')));

// Catch-all route for Angular (send index.html file for all unknown routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'student-login', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
