const express = require('express');
const data = require('./data');
const app = express();
const port = 3002;

app.get('/api/data', data);

app.listen(port, () => console.log(`Listening on port ${port}!`))