var express = require('express');
var app = express();

var engine = require('ejs-locals');
app.engine('ejs',engine);
app.set('views','./views');
app.set('view engine','ejs'); 


//首頁路徑
app.get('/',function(req,res){
    res.render('index');
})

app.get('/todolist',function(req,res){
    res.render('firebase');
})


//監聽
var port = process.env.PORT || 3000;
app.listen(port);