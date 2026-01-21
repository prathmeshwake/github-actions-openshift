const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hi Bro I have made the changes and redeployed this app again now!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
