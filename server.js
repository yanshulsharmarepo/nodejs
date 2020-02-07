const express = require('express'), http = require('http');

const hostname = 'localhost';
const port = 8080;
const app = express();
var url = require('url')
var fs = require("fs");



app.set("view engine","jade")

app.use("/javascripts", express.static("Modules/myApp/Assets/reactBuild"));

app.get('/', function (req, res) {


  //  console.log("uel",req.protocol+"://"+req.headers.host);
    res.render("index",{ title: 'Express', scripts: [__dirname+'/Modules/myApp/Assets/reactBuild/myApp.js'], url: ''+req.protocol+"://"+req.headers.host+''})

});


app.get('/show', function (req, res) {
    res.send({name: "yanshul", email: "yanshul@chtrbox.com"});
});

const sample_server = http.createServer(app);

sample_server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});