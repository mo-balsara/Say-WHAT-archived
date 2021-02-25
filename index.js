const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/public/dashboard.html');
});

app.listen(6969, () => {
  console.log('server started');
});