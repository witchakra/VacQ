const mysql = require("mysql");

var connection = mysql.createPool({
    host:'localhost',
    user :'root',
    password:'w12092548',
    database:'vacCenter'
});

module.exports = connection;