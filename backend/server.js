const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const dotenv = require('dotenv');
dotenv.config();

const errorHandler = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errorHandler.serverError);
app.use(errorHandler.notFoundError);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});