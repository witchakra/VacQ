const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path:'./config/config.env'});

const app = express();

const hospitals = require('./routes/hospital');

app.use('/api/V1/hospitals',hospitals);

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log('Server running in ' , process.env.NODE_ENV , ' mode on port ',PORT));