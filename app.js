const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
      <h1>Welcome to Back4app Containers</h1>
    </div>
  `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
