var http = require('http');
var fs = require('fs');
var url = require('url');
var request = require("request");
var urlencode = require('urlencode');

var key = "RGAPI-c9680d87-ca09-45c1-bb86-13461a06c71b";
var url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + urlencode("롤삐남") + "?api_key=" + key;

var user_id_input_box = document.getElementById("user_name");
var search_button = document.getElementById("search");
search_button.addEventListener('click', function(){
    var user_id_input = user_id_input_box.value;
    var url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + urlencode(user_id_input) + "?api_key=" + key;
})




var title = "a";
var tmp;
var tmp2;

request(url, function (error, response, body) {
    console.log(body);
    tmp2 = JSON.parse(body);
    tmp = tmp2["id"];

    var app = http.createServer(function (request, response) {
        response.writeHead(200);
        fs.readFile("helper_gg.html", "utf8", function (err, data) {

            response.end(data);
        });
    });

    app.listen(3000, () => {
        console.log("Server Running");
    });
});
