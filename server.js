const express = require('express'), http = require('http');

const hostname = 'localhost';
const port = 8086;
const app = express();

var bodyParser = require('body-parser');
var Users = require('./Models/users');


app.set("view engine", "jade");
var session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use("/javascripts", express.static("Modules/myApp/Assets/reactBuild"));


const LoginMiddleWare = (req, res, next) => {
    // console.log("LoginMiddleWare",(req.session.userId == undefined),req.session.userId)
    if (req.session.userId == undefined)
    {
        res.redirect('/login');
    }
    else
    {
        next();
    }
};

const RedirectHome = (req, res, next) => {
    console.log("RedirectHome",(req.session.userId != "undefined"),req.session.userId)
    if (req.session.userId != undefined)
    {

        res.redirect('/home');
    }
    else
    {
        next();
    }
};

app.use(LoginMiddleWare);
app.use(RedirectHome);
// app.get('/home', LoginMiddleWare, function (req, res) {
//
//     res.render("index",{ title: 'Express', scripts: [__dirname+'/Modules/myApp/Assets/reactBuild/myApp.js'], url: ''+req.protocol+"://"+req.headers.host+''})
//
// });


app.get('/', LoginMiddleWare, function (req, res) {
    const {userId} = req.session;
    res.end(
        '<html> <h1>Welcome</h1>' +
        ' <a href = "/login">Login</a>' +
        ' <a href = "/register">Register</a>' +
        '</html>'
    );
});


app.get('/home', LoginMiddleWare ,function (req, res) {
    // Users.myUsers(req,res);
    console.log("dddd",req.session.userId);
    res.end(JSON.stringify({status: req.session.userId}))
});

app.get('/login',RedirectHome, function (req, res) {
    res.end(
        '<html> <h1>Welcome</h1>' +
        '<form action="/login" method="post">\n' +
        '  Email Id:<br>\n' +
        '  <input type="email" name="email" placeholder="yanshul@gmail.com" required>\n' +
        '  <br>\n' +
        '  Password :<br>\n' +
        '  <input type="password" name="password" placeholder="*******" required>\n' +
        '  <br><br>\n' +
        '  <input type="submit" value="Submit">\n' +
        '</form> ' +
        ' <a href = "/register">Register</a>' +
        ' <a href = "/">Home</a>' +
        '</html>'
    );
});

app.get('/register', RedirectHome, function (req, res) {
    res.end(
        '<html> <h1>Welcome</h1>' +
        '<form action="/register" method="post">\n' +
        '  Email Id:<br>\n' +
        '  <input type="email" name="email" placeholder="yanshul@gmail.com" required>\n' +
        '  <br>\n' +
        '  Password :<br>\n' +
        '  <input type="password" name="password" placeholder="*******" required>\n' +
        '  <br><br>\n' +
        '  Name :<br>\n' +
        '  <input type="password" name="text" placeholder="yanshul" required>\n' +
        '  <br><br>\n' +
        '  <input type="submit" value="Submit">\n' +
        '</form> ' +
        ' <a href = "/login">Login</a>' +
        ' <a href = "/">Home</a>' +
        '</html>'
    );
});


// app.post('/update/:id', function (req, res) {
//     Users.update(req,res);
// });
//
app.post('/login', LoginMiddleWare, function (req, res) {
    res.end(JSON.stringify({status: req.session.userId}));
});
app.post('/register', LoginMiddleWare, function (req, res) {
    res.end(JSON.stringify({status: true}));
});
app.post('/logout', LoginMiddleWare, function (req, res) {
    Users.myUsers(req, res);
});
//
// app.post('/delete/:id', function (req, res) {
//     Users.delete(req,res);
// });


const sample_server = http.createServer(app);

sample_server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});