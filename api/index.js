const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.send('hello');
});

app.listen(3333);