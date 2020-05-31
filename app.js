var express = require('express');
var app = express();
    //console.log(app);

//守門員
app.use(function(req,res,next){
    console.log('登入成功');
    next();
})
//路徑有錯誤
/*app.use(function(req,res,next){
    res.status(404).send('抱歉您的頁面找不到')
})*/
//程式有錯誤
/*app.use(function(err,req,res,next){
    res.status(500).send('程式有些問題，請稍後嘗試')
})*/
//載入靜態檔案
app.use(express.static('public'))
//首頁路徑
app.get('/',function(req,res){
    //res.send(820);
    res.send('<html><head></head><body><img src="/image/5kZoWRZs.jpg"></body></html>');

})

//常數的路徑
app.get('/weather',function(req,res){
    res.send('<html><head></head><body>出太陽</body></html>');
})
//變數的路徑
app.get('/user/:name',function(req,res){
    var Name = req.params.name;
    if(Name!=='gary'){
        res.send('<html><head></head><body>查無此人</body></html>');
    }else{
        res.send('<html><head></head><body>'+Name+'</body></html>');
    }
})
//有參數的路徑
app.get('/song/:name',function(req,res){
    var Name = req.params.name;
    var limit = req.query.limit;
        res.send('<html><head></head><body>'+Name
        +'聽'
        +limit
        +'首歌</body></html>');
})

//監聽
var port = process.env.PORT || 3000;
app.listen(port);