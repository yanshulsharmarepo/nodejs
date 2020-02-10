var connection = require('../config/dbconnection');


module.exports.myUsers = function myUsers(res)
{
    let data = [];
    connection.connection.query('select * from users', function (error, results, fields) {
        if (error) throw error;
        data =  (JSON.stringify(results));
        res.end(data);
    });
}

// module.exports.myUsers = myUsers;