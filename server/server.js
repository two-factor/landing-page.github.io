const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static(path.resolve(__dirname, '/img')));
app.get('/img/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, `img/${req.params[0]}`));
})

app.use('/dist', express.static('dist'))

if (process.env.NODE_ENV !== 'development') {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(3000);
