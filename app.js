const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          @font-face {
            font-family: "Sora";
            src: url("https://example.com/fonts/sora/Sora-SemiBold.ttf");
            font-style: normal;
            font-weight: 600;
            font-display: swap;
          }
          @font-face {
            font-family: "Sora";
            src: url("https://example.com/fonts/sora/Sora-Bold.ttf");
            font-style: normal;
            font-weight: 700;
            font-display: swap;
          }
          /* Rest of your CSS here... */
          body {
            background-color: #1a1a1a;
            color: #fff;
            font-family: Sora, Arial, sans-serif;
            text-align: center;
            height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to Back4app Containers</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
