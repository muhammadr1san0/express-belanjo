require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT_SERVER
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan')

const route = require('./src/routers/')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(logger('dev'))
app.use('/api/v1', route);

app.listen(port, ()=>{
  console.log(`App Listen port ${port}`);
})