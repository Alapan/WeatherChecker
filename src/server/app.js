const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.listen(3000, () => {
  console.log('Listening to port 3000...');
});

app.use(express.static('public'));
app.use('/dist', express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve('src/client/templates/index.html'));
});
