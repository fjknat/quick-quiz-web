const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3010;

// Route để phục vụ quiz HTML files
app.get('/quiz/:quizType', (req, res) => {
  const quizType = req.params.quizType;
  // Giả sử file có format: {quizType}-basic-quiz.html
  const fileName = `${quizType}.html`;
  const filePath = path.join(__dirname, 'quizzes', fileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${fileName}:`, err);
      return res.status(404).send('Quiz file not found');
    }
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
});

// Route mặc định hoặc root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});