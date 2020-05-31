var express = require('express');
var app = express();
//要先按裝firebase-admin
var admin = require("firebase-admin");

var serviceAccount = require("./project-ae5d7-firebase-adminsdk-xlpel-14a146892b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project-ae5d7.firebaseio.com"
});

var firedata = admin.database();
//console.log(firedata);

firedata.ref('todos').once('value',function(snapshot){
        //console.log(snapshot.val());
})

firedata.ref('todos').set({"title":"主題"})
.then(function(){
    firedata.ref('todos').once('value',function(snapshot){
        console.log(snapshot.val());
    })
})
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


//監聽
var port = process.env.PORT || 3000;
app.listen(port);