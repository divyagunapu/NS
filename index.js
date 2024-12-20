'use strict'

const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/myRoutes');
const port = 5500;
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`application runnig at the port ${port}`)
})
