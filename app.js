const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json({ extended: true }));
app.use(cors());

const discountRouter = require('./discountEngine/discountRoute');

app.use('/discount', discountRouter);

app.listen(port, () => console.log(`Express app running on port ${port}!`));