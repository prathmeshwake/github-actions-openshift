const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hi I have made the commit for new deployment!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
