const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('did the changes again!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
