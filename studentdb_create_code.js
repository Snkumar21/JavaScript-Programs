//create_db.js
var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Snkumar30"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE studentdb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});