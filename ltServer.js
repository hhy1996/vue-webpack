var ws = require('nodejs-websocket');
console.log("开始建立连接");

var usersNow = [];

var server = ws.createServer(function(conn){
    var userData = {};
var msgData = {};
        conn.on("text",function (str) {
            request = JSON.parse(str);
            
            if(request['msgtype'] == 'adduser'){
                userData['msgtype'] = 'adduser';
                userData['name'] = request['name'];
                userData['id'] = new Date().getTime();
                usersNow.push(userData);
                let newUser = {};
                newUser['msgtype'] = 'newuser';
                newUser['name'] = userData['name'];
                newUser['id'] = userData['id'];
                newUser['usernumber'] = usersNow.length;
                conn.sendText(JSON.stringify(userData));
                broadcast(server,newUser);
            }else{
                msgData['msgtype'] = 'message';
                msgData['content'] = request['content'];
                msgData['username'] = request['username'];
                msgData['userid'] = request['userid'];
                broadcast(server,msgData);
            }
        });
        conn.on('connect', function(e) {
            console.log('开启连接');
          });
          conn.on('close', function(e) {
            console.log('关闭连接');
              let leftUser={};
              leftUserId = userData['id'];
              usersNow = usersNow.filter(function(user){
                return user.id !== leftUserId;
            })
            leftUser['msgtype'] = 'leftuser';
            leftUser['name'] = userData['name'];
            leftUser['id'] = leftUserId;
            leftUser['usernumber'] = usersNow.length;
            broadcast(server,leftUser);
          });
          conn.on('error', function(e) {
            console.log('异常关闭');
          });
          return server
    }).listen(8082);
function broadcast(server,msgData){
    server.connections.forEach(function(conn){
        conn.sendText(JSON.stringify(msgData));
    });
};

console.log('ws://127.0.0.1:8082/');

