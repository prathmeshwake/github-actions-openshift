const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Enterprise CI/CD App — Blue/Green + Helm + GitHub Actions!');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
