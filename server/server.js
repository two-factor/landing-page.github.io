const express = require('express');
const path = require('path');

const app = express();

app.use('/dist', express.static('dist'))

if (process.env.NODE_ENV !== 'development') {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(3000);
