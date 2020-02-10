var connection = require('../config/dbconnection');

var rand = function(id) {
    return Math.random(id).toString(36).substr(2); // remove `0.`
};

var token = function() {
    return rand() + rand() + rand() + rand(); // to make it longer
};

module.exports.myUsers = function myUsers(req, res)
{
    let data = [];
    connection.connection.query('select * from users', function (error, results, fields) {
        if (error) throw error;
       // results.time = req.requestTime;
       //  results["time"] = req.requestTime;
        // Object.assign({time : req.requestTime},results);
        data =  (JSON.stringify(Object.assign({time : req.requestTime},results)));
        res.end(data);
    });
}


module.exports.update = function myUsers(req, res)
{
    let data = [];

    // if(req.param('id'))
    let name = req.param('name');
    let id = req.param('id');
    let email = req.param('email');
    let api_token = req.param('api_token');
    let updated_at = req.param('updated_at');


    let sql = "update users SET ";
    if(email !=undefined)
    {
        sql = sql+" email = ?";
        data.push(email);
    }
    if(name !=undefined)
    {
        sql = sql+" name = ?";
        data.push(name);
    }

    if(id !=undefined)
    {
        sql = sql+" where id = ?";
        data.push(id);
    }
    else
    {
        return res.end(JSON.stringify({status : false , message: "please put id"}));
    }
    connection.connection.query(sql, data, (error, results, fields) => {
        if (error){
            return res.end(JSON.stringify({status : false}));
        }
        return res.end(JSON.stringify({status : true}));
    });
}


module.exports.create = function myUsers(req, res)
{
    let data = [];

    // if(req.param('id'))
    let name = req.param('name');
    let email = req.param('email');
    let created_at = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    let updated_at = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    let api_token = token(Date.now());

    let sql = "INSERT INTO users ( ";
    let VALUES = " VALUES ?"
    if(email !=undefined)
    {
        sql = sql+"email ,";
        data.push(email);
    }
    if(name !=undefined)
    {
        sql = sql+"name ,";
        data.push(name);
    }
    if(created_at !=undefined)
    {
        sql = sql+"created_at ,";
        data.push(created_at);
    }
    if(updated_at !=undefined)
    {
        sql = sql+"updated_at ,";
        data.push(updated_at);
    }
    if(api_token !=undefined)
    {
        sql = sql+" api_token )";
        data.push(api_token);
    }
    data =[data];
    sql = sql + VALUES;
    // return res.end(JSON.stringify({sql : sql,data: data.toString() }));
    connection.connection.query(sql, [data], (error, results, fields) => {
        if (error){
            return res.end(JSON.stringify({status : false}));
        }
        return res.end(JSON.stringify({status : true}));
    });
}


module.exports.delete = function myUsers(req, res)
{
    let data = [];

    let id = req.param('id');
    let sql = "delete FROM users ";


    if(id !=undefined)
    {
        sql = sql+" where id = ?";
        data.push(id);
    }
    else
    {
        return res.end(JSON.stringify({status : false , message: "please put id"}));
    }
    connection.connection.query(sql, data, (error, results, fields) => {
        if (error){
            return res.end(JSON.stringify({status : false}));
        }
        return res.end(JSON.stringify({status : true}));
    });
}