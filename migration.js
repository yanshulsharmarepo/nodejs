var mysql = require('mysql');
var migration = require('mysql-migrations');
require ('custom-env').env()

var connection = mysql.createPool({
    connectionLimit : 1000,
    host     : process.env.DB_HOST,
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});

migration.init(connection, __dirname + '/migrations');