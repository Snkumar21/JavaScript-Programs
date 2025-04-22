// Example of delete values from the database using node.js

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

    var sql = "DELETE FROM student WHERE name = 'Mahamud'";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Records deleted:"+ result.affectedRows);
    });
});