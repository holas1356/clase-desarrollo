const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./config/database')
const routers = require('./routes/index')
const auth = require('./middleware/auth')

const app = express();
const port = 3005

connectDB();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(auth.initialize());

app.use('/', routers)

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));