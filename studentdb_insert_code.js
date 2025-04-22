// Example of inserting values in database using node.js

var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Snkumar30",
    database: "studentdb"
});

// Insert Student Details
con.connect(function(err) {
    if(err)throw err;
    console.log("Connected");

    var sql = "Insert INTO student (rollno, name, percentage) VALUES ?";
    var  values = [
        [1, 'Aditee', 89.0]
    ];

    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: "+result.affectedRows);

    });
});