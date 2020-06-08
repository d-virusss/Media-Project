var fs = require('fs');
var express = require('express');
var app = express();
var qs = require('querystring');

function templateHTML(mbti_type, body) {
    return `
          <!doctype html>
          <html>
          <head>
            <title>MBTI 유형 - ${mbti_type}</title>
            <meta charset="utf-8">
          </head>
          <body>
            ${body}
          </body>
          </html>
          `;
};

var mbti_type = "ENFJ";

app.get('/', function(req, res){
    fs.readFile(`MBTI_sheet/${mbti_type}`, 'utf-8', function (err, data) {
    var template = templateHTML(mbti_type, data);
    console.log(data);
    console.log(template);
    res.writeHead(200);
    res.end(template);
  });
});

app.listen(3010, function(){
    console.log('test server load success');
})