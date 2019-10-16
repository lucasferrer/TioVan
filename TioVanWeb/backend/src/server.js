const express = require('express');
const mongoose = require('mongoose');
const routes = require('/routes');

const app = express();

mongoose.connect('');

app.use(express.json());
app.use(routes);

app.listen(8080);