// Example of reading the values from the database using node.js

var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Snkumar30",
    database: "studentdb"
});

// Read Student Details
con.connect(function(err) {
    if(err)throw err;
    console.log("Connected");

    con.query("SELECT * FROM student", function (err, result, fields) {
        if (err) throw err;
        console.log("Student Records:");
        console.log(result);
    });
});