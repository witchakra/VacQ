const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({path:'./config/config.env'});

connectDB();

const hospitals = require('./routes/hospital');

const app = express();

app.use(express.json());

app.use('/api/V1/hospitals',hospitals);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, console.log('Server running in ' , process.env.NODE_ENV , ' mode on port ',PORT));

process.on('unhandledRejection',(err,promise) => {
    console.log(`Eror: ${err.message}`);
    server.close(() =>process.exit(1));
});