//var express = require('express');
//var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
//});

//module.exports = router;
var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"123456",
    database:"word"
})


connection.connect();
module.exports = connection;
//module.exports = router;
