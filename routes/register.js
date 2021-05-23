var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
  router.post("/regist",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
        var username = fields.name;
        var password = fields.password;
        var query = 'insert into users values("'+username+'","'+password+'")'
        connection.query(query,function(err,rows){
            if(err){
                console.log(err);
                return;
            }
            res.json({"status":1});
        })
    })
})
});

module.exports = router;