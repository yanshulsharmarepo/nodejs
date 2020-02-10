var mysql = require('mysql');
var migration = require('mysql-migrations');
require('custom-env').env()

var mysqlModel = require('mysql-model');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "localhost",
    database: "nodejs"
});

module.exports.connection = connection;
// connection.connect(function(err) {
//     if (err) throw err
//     console.log('You are now connected with mysql database...')
// });

