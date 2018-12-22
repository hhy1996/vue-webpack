var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
    fs.readFile('./index.html','utf-8',function(err,data){
        if(err){
            throw err
        }else{
            res.end(data);
        }
    })
});
app.get('/liaotian',function(req,res){
    fs.readFile('./liaotian1.html','utf-8',function(err,data){
        if(err){
            throw err
        }else{
            res.end(data);
        }
    })
});
app.get('/getJson',function(req,res){
    var imgId = req.query.imgId;
    var data = '';
    if (imgId == 1){
        data = { 
            url: "./src/img/i1.jpg",
            title: "标题1",
            content: "介绍介绍介绍介绍介绍1",
            other : "一二三"
          }
    }else if (imgId == 2){
        data = { 
            url: "./src/img/i2.jpg",
            title: "标题2",
            content: "介绍介绍介绍介绍介绍2",
            other : "一二三"
          }
    }else if (imgId == 3){
        data = { 
            url: "./src/img/i3.jpg",
            title: "标题3",
            content: "介绍介绍介绍介绍介绍3",
            other : "一二三"
          }
    }else if (imgId == 4){
        data = { 
            url: "./src/img/i4.jpg",
            title: "标题4",
            content: "介绍介绍介绍介绍介绍4",
            other : "一二三"
          }
    }else if (imgId== 5){
        data = { 
            url: "./src/img/i5.jpg",
            title: "标题5",
            content: "介绍介绍介绍介绍介绍5",
            other : "一二三"
          }
    }else if (imgId == 6){
        data = { 
            url: "./src/img/i6.jpg",
            title: "标题6",
            content: "介绍介绍介绍介绍介绍6",
            other : "一二三"
          }
    }else if (imgId == 7){
        data = { 
            url: "./src/img/i7.jpg",
            title: "标题7",
            content: "介绍介绍介绍介绍介绍7",
            other : "一二三"
          }
    }else{
        data = {
            url: null
        }
    }
    res.send(JSON.stringify(data));
});
var server = app.listen(8081,function(){
	var host = server.address().address;
    var port = server.address().port;
    console.log("地址:http://"+host+":"+port)
});