const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connection = require('./config/connection');

app.use(express.json()); // Middleware to parse JSON

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});