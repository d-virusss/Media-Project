var http = require('http');
var fs = require('fs');
var url = require('url');
var request = require("request");
var urlencode = require('urlencode');
var express = require("express");
var app = express();
var key = "RGAPI-c9680d87-ca09-45c1-bb86-13461a06c71b";
var qs= require("querystring");

var url_name = function(nickname, key){
return `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${urlencode(nickname)}?api_key=${key}`;
};

var nickname;
app.get('/', function(req, res){
fs.readFile('helper.html', 'utf8', function(err, data){
  res.end(data);
})
});

app.get('/userinfo', function(req,res){
request(url_name(nickname, key), function(err, re, body){
  var userinfo = body;
  userinfo = JSON.parse(userinfo);
  var temp =`
  ID : ${userinfo.id}
  LEVEL : ${userinfo.summonerLevel}
  `;
  res.end(temp);
});
});
app.post('/search_process', function(req,res){
var body = '';
req.on('data', function(data){
  body = body + data;
});
req.on('end', function(){
  var post = qs.parse(body);
  nickname = post.nickname;
  res.writeHead(302, {Location : '/userinfo'});
  res.end();
});
});
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});