const express = require('express'), http = require('http');

const hostname = 'localhost';
const port = 8086;
const app = express();
var url = require('url')
var fs = require("fs");
var mysql = require('mysql');
var bodyParser = require('body-parser');
// var connections = require('./config/dbconnection');
var connection  = require('./config/dbconnection');

var Users  =  require('./Models/users');

// var connection = require('./config/dbconnection');
// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "localhost",
//     database: "nodejs"
// });


app.set("view engine","jade")

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.use("/javascripts", express.static("Modules/myApp/Assets/reactBuild"));

app.get('/', function (req, res) {


  //  console.log("uel",req.protocol+"://"+req.headers.host);
    res.render("index",{ title: 'Express', scripts: [__dirname+'/Modules/myApp/Assets/reactBuild/myApp.js'], url: ''+req.protocol+"://"+req.headers.host+''})

});


app.get('/show', function (req, res) {
   // console.log("sss",UserModel.getEmployeeNames());
   Users.myUsers(res);

});

const sample_server = http.createServer(app);

sample_server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});