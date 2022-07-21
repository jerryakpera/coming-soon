const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const app = express();
app.use(cors());
app.use(helmet());

app.use(express.static('./src/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Server live on port 4000');
});
