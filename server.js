var http = require('http');
var fs = require('fs');
var url = require('url');
var requestt = require("request");
var urlencode = require('urlencode');

var key = "RGAPI-c9680d87-ca09-45c1-bb86-13461a06c71b";

 
var url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+urlencode("뵹듄띵")+"?api_key="+key;

var title ="a";
var tmp;
var tmp2;    

requestt(url, function(error,response, body){
  console.log(body);
  tmp2 = JSON.parse(body);
  tmp = tmp2["id"];
  
var app = http.createServer(function(request,response){
  response.writeHead(200);
  var template = `
  <!doctype html>
  <html>
  <head>
    <title>HELPER.GG</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">HELPER.GG</a></h1>
    <input type="text" name="my_name" size="20" value="입력하세요">
    ${tmp2["id"]}
    
  </body>
  </html>
  `;
  response.end(template);

});
app.listen(3000);
 });