const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello Deployed to OpenShift using GitHub Actions + Docker Hub!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
