// Example of updating the values in database using node.js

var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Snkumar30",
    database: "studentdb"
});

// Update Student Details
con.connect(function(err) {
    if(err)throw err;
    console.log("Connected");

    var sql = "UPDATE student SET percentage = 93.0 WHERE name = 'Tejaswini'";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Records updated:"+ result.affectedRows);
    });
});