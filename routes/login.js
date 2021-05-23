var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
  router.post("/login",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
        var username = fields.name;
        var password = fields.password;
        var query = 'select * from users where username ="'+username+'" and password = "'+password+'"';
        connection.query(query,function(err,rows){
            if(err){
                console.log(err);
                return;
            }console.log(rows[0]);
            if(!rows[0]){
                res.json({"status":-1});
            }else{
                res.json({"status":1});
            }
        })
    })
})
});

module.exports = router;