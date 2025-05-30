const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from DevOps with Jenkins and Docker!</h1>');
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
