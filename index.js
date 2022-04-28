const express = require('express');

const app = express();
const router = require('./routes/routes');

app.use('/loaderio-3637b0b90a259479e2fb587d161efe68.txt', express.static('loaderio-3637b0b90a259479e2fb587d161efe68.txt'))
app.use('/products', router);
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
