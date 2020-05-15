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


var url_matchlist = function(userid, key){
  return `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${urlencode(userid)}?api_key=${key}`;
  };




var champarr = [];
for(var i =0; i<900; i++){
    champarr.push([]);
}

champarr[120][0] = "헤카림";
champarr[120][1] = 0;
champarr[120][2] = 0;
champarr[120][3] = 0;
champarr[120][4] = 0;
champarr[120][5] = 0;
champarr[120][5] = 0;

champarr[74][0] = "하이머딩거";
champarr[74][1] = 0;
champarr[74][2] = 0;
champarr[74][3] = 0;
champarr[74][4] = 0;
champarr[74][5] = 0;
champarr[74][5] = 0;

champarr[105][0] = "피즈";
champarr[105][1] = 0;
champarr[105][2] = 0;
champarr[105][3] = 0;
champarr[105][4] = 0;
champarr[105][5] = 0;
champarr[105][5] = 0;

champarr[114][0] = "피오라";
champarr[114][1] = 0;
champarr[114][2] = 0;
champarr[114][3] = 0;
champarr[114][4] = 0;
champarr[114][5] = 0;
champarr[114][5] = 0;

champarr[9][0] = "피들스틱";
champarr[9][1] = 0;
champarr[9][2] = 0;
champarr[9][3] = 0;
champarr[9][4] = 0;
champarr[9][5] = 0;
champarr[9][5] = 0;

champarr[80][0] = "판테온";
champarr[80][1] = 0;
champarr[80][2] = 0;
champarr[80][3] = 0;
champarr[80][4] = 0;
champarr[80][5] = 0;
champarr[80][5] = 0;

champarr[555][0] = "파이크";
champarr[555][1] = 0;
champarr[555][2] = 0;
champarr[555][3] = 0;
champarr[555][4] = 0;
champarr[555][5] = 0;
champarr[555][5] = 0;

champarr[17][0] = "티모";
champarr[17][1] = 0;
champarr[17][2] = 0;
champarr[17][3] = 0;
champarr[17][4] = 0;
champarr[17][5] = 0;
champarr[17][5] = 0;

champarr[29][0] = "트위치";
champarr[29][1] = 0;
champarr[29][2] = 0;
champarr[29][3] = 0;
champarr[29][4] = 0;
champarr[29][5] = 0;
champarr[29][5] = 0;

champarr[4][0] = "트위스티드페이트";
champarr[4][1] = 0;
champarr[4][2] = 0;
champarr[4][3] = 0;
champarr[4][4] = 0;
champarr[4][5] = 0;
champarr[4][5] = 0;

champarr[23][0] = "트린다미어";
champarr[23][1] = 0;
champarr[23][2] = 0;
champarr[23][3] = 0;
champarr[23][4] = 0;
champarr[23][5] = 0;
champarr[23][5] = 0;

champarr[18][0] = "트리스타나";
champarr[18][1] = 0;
champarr[18][2] = 0;
champarr[18][3] = 0;
champarr[18][4] = 0;
champarr[18][5] = 0;
champarr[18][5] = 0;

champarr[48][0] = "트런들";
champarr[48][1] = 0;
champarr[48][2] = 0;
champarr[48][3] = 0;
champarr[48][4] = 0;
champarr[48][5] = 0;
champarr[48][5] = 0;

champarr[223][0] = "탐 켄치";
champarr[223][1] = 0;
champarr[223][2] = 0;
champarr[223][3] = 0;
champarr[223][4] = 0;
champarr[223][5] = 0;
champarr[223][5] = 0;

champarr[163][0] = "탈리야";
champarr[163][1] = 0;
champarr[163][2] = 0;
champarr[163][3] = 0;
champarr[163][4] = 0;
champarr[163][5] = 0;
champarr[163][5] = 0;

champarr[91][0] = "탈론";
champarr[91][1] = 0;
champarr[91][2] = 0;
champarr[91][3] = 0;
champarr[91][4] = 0;
champarr[91][5] = 0;
champarr[91][5] = 0;

champarr[44][0] = "타릭";
champarr[44][1] = 0;
champarr[44][2] = 0;
champarr[44][3] = 0;
champarr[44][4] = 0;
champarr[44][5] = 0;
champarr[44][5] = 0;

champarr[203][0] = "킨드레드";
champarr[203][1] = 0;
champarr[203][2] = 0;
champarr[203][3] = 0;
champarr[203][4] = 0;
champarr[203][5] = 0;
champarr[203][5] = 0;

champarr[246][0] = "키아나";
champarr[246][1] = 0;
champarr[246][2] = 0;
champarr[246][3] = 0;
champarr[246][4] = 0;
champarr[246][5] = 0;
champarr[246][5] = 0;

champarr[240][0] = "클레드";
champarr[240][1] = 0;
champarr[240][2] = 0;
champarr[240][3] = 0;
champarr[240][4] = 0;
champarr[240][5] = 0;
champarr[240][5] = 0;

champarr[133][0] = "퀸";
champarr[133][1] = 0;
champarr[133][2] = 0;
champarr[133][3] = 0;
champarr[133][4] = 0;
champarr[133][5] = 0;
champarr[133][5] = 0;

champarr[42][0] = "코르키";
champarr[42][1] = 0;
champarr[42][2] = 0;
champarr[42][3] = 0;
champarr[42][4] = 0;
champarr[42][5] = 0;
champarr[42][5] = 0;

champarr[96][0] = "코그모";
champarr[96][1] = 0;
champarr[96][2] = 0;
champarr[96][3] = 0;
champarr[96][4] = 0;
champarr[96][5] = 0;
champarr[96][5] = 0;

champarr[10][0] = "케일";
champarr[10][1] = 0;
champarr[10][2] = 0;
champarr[10][3] = 0;
champarr[10][4] = 0;
champarr[10][5] = 0;
champarr[10][5] = 0;

champarr[141][0] = "케인";
champarr[141][1] = 0;
champarr[141][2] = 0;
champarr[141][3] = 0;
champarr[141][4] = 0;
champarr[141][5] = 0;
champarr[141][5] = 0;

champarr[51][0] = "케이틀린";
champarr[51][1] = 0;
champarr[51][2] = 0;
champarr[51][3] = 0;
champarr[51][4] = 0;
champarr[51][5] = 0;
champarr[51][5] = 0;

champarr[85][0] = "케넨";
champarr[85][1] = 0;
champarr[85][2] = 0;
champarr[85][3] = 0;
champarr[85][4] = 0;
champarr[85][5] = 0;
champarr[85][5] = 0;

champarr[429][0] = "칼리스타";
champarr[429][1] = 0;
champarr[429][2] = 0;
champarr[429][3] = 0;
champarr[429][4] = 0;
champarr[429][5] = 0;
champarr[429][5] = 0;

champarr[55][0] = "카타리나";
champarr[55][1] = 0;
champarr[55][2] = 0;
champarr[55][3] = 0;
champarr[55][4] = 0;
champarr[55][5] = 0;
champarr[55][5] = 0;

champarr[121][0] = "카직스";
champarr[121][1] = 0;
champarr[121][2] = 0;
champarr[121][3] = 0;
champarr[121][4] = 0;
champarr[121][5] = 0;
champarr[121][5] = 0;

champarr[145][0] = "카이사";
champarr[145][1] = 0;
champarr[145][2] = 0;
champarr[145][3] = 0;
champarr[145][4] = 0;
champarr[145][5] = 0;
champarr[145][5] = 0;

champarr[69][0] = "카시오페아";
champarr[69][1] = 0;
champarr[69][2] = 0;
champarr[69][3] = 0;
champarr[69][4] = 0;
champarr[69][5] = 0;
champarr[69][5] = 0;

champarr[30][0] = "카서스";
champarr[30][1] = 0;
champarr[30][2] = 0;
champarr[30][3] = 0;
champarr[30][4] = 0;
champarr[30][5] = 0;
champarr[30][5] = 0;

champarr[38][0] = "카사딘";
champarr[38][1] = 0;
champarr[38][2] = 0;
champarr[38][3] = 0;
champarr[38][4] = 0;
champarr[38][5] = 0;
champarr[38][5] = 0;

champarr[164][0] = "카밀";
champarr[164][1] = 0;
champarr[164][2] = 0;
champarr[164][3] = 0;
champarr[164][4] = 0;
champarr[164][5] = 0;
champarr[164][5] = 0;

champarr[43][0] = "카르마";
champarr[43][1] = 0;
champarr[43][2] = 0;
champarr[43][3] = 0;
champarr[43][4] = 0;
champarr[43][5] = 0;
champarr[43][5] = 0;

champarr[31][0] = "초가스";
champarr[31][1] = 0;
champarr[31][2] = 0;
champarr[31][3] = 0;
champarr[31][4] = 0;
champarr[31][5] = 0;
champarr[31][5] = 0;

champarr[222][0] = "징크스";
champarr[222][1] = 0;
champarr[222][2] = 0;
champarr[222][3] = 0;
champarr[222][4] = 0;
champarr[222][5] = 0;
champarr[222][5] = 0;

champarr[26][0] = "질리언";
champarr[26][1] = 0;
champarr[26][2] = 0;
champarr[26][3] = 0;
champarr[26][4] = 0;
champarr[26][5] = 0;
champarr[26][5] = 0;

champarr[202][0] = "진";
champarr[202][1] = 0;
champarr[202][2] = 0;
champarr[202][3] = 0;
champarr[202][4] = 0;
champarr[202][5] = 0;
champarr[202][5] = 0;

champarr[115][0] = "직스";
champarr[115][1] = 0;
champarr[115][2] = 0;
champarr[115][3] = 0;
champarr[115][4] = 0;
champarr[115][5] = 0;
champarr[115][5] = 0;

champarr[142][0] = "조이";
champarr[142][1] = 0;
champarr[142][2] = 0;
champarr[142][3] = 0;
champarr[142][4] = 0;
champarr[142][5] = 0;
champarr[142][5] = 0;

champarr[126][0] = "제이스";
champarr[126][1] = 0;
champarr[126][2] = 0;
champarr[126][3] = 0;
champarr[126][4] = 0;
champarr[126][5] = 0;
champarr[126][5] = 0;

champarr[101][0] = "제라스";
champarr[101][1] = 0;
champarr[101][2] = 0;
champarr[101][3] = 0;
champarr[101][4] = 0;
champarr[101][5] = 0;
champarr[101][5] = 0;

champarr[238][0] = "제드";
champarr[238][1] = 0;
champarr[238][2] = 0;
champarr[238][3] = 0;
champarr[238][4] = 0;
champarr[238][5] = 0;
champarr[238][5] = 0;

champarr[24][0] = "잭스";
champarr[24][1] = 0;
champarr[24][2] = 0;
champarr[24][3] = 0;
champarr[24][4] = 0;
champarr[24][5] = 0;
champarr[24][5] = 0;

champarr[40][0] = "잔나";
champarr[40][1] = 0;
champarr[40][2] = 0;
champarr[40][3] = 0;
champarr[40][4] = 0;
champarr[40][5] = 0;
champarr[40][5] = 0;

champarr[154][0] = "자크";
champarr[154][1] = 0;
champarr[154][2] = 0;
champarr[154][3] = 0;
champarr[154][4] = 0;
champarr[154][5] = 0;
champarr[154][5] = 0;

champarr[143][0] = "자이라";
champarr[143][1] = 0;
champarr[143][2] = 0;
champarr[143][3] = 0;
champarr[143][4] = 0;
champarr[143][5] = 0;
champarr[143][5] = 0;

champarr[498][0] = "자야";
champarr[498][1] = 0;
champarr[498][2] = 0;
champarr[498][3] = 0;
champarr[498][4] = 0;
champarr[498][5] = 0;
champarr[498][5] = 0;

champarr[59][0] = "자르반 4세";
champarr[59][1] = 0;
champarr[59][2] = 0;
champarr[59][3] = 0;
champarr[59][4] = 0;
champarr[59][5] = 0;
champarr[59][5] = 0;

champarr[420][0] = "일라오이";
champarr[420][1] = 0;
champarr[420][2] = 0;
champarr[420][3] = 0;
champarr[420][4] = 0;
champarr[420][5] = 0;
champarr[420][5] = 0;

champarr[81][0] = "이즈리얼";
champarr[81][1] = 0;
champarr[81][2] = 0;
champarr[81][3] = 0;
champarr[81][4] = 0;
champarr[81][5] = 0;
champarr[81][5] = 0;

champarr[28][0] = "이블린";
champarr[28][1] = 0;
champarr[28][2] = 0;
champarr[28][3] = 0;
champarr[28][4] = 0;
champarr[28][5] = 0;
champarr[28][5] = 0;

champarr[39][0] = "이렐리아";
champarr[39][1] = 0;
champarr[39][2] = 0;
champarr[39][3] = 0;
champarr[39][4] = 0;
champarr[39][5] = 0;
champarr[39][5] = 0;

champarr[350][0] = "유미";
champarr[350][1] = 0;
champarr[350][2] = 0;
champarr[350][3] = 0;
champarr[350][4] = 0;
champarr[350][5] = 0;
champarr[350][5] = 0;

champarr[19][0] = "워윅";
champarr[19][1] = 0;
champarr[19][2] = 0;
champarr[19][3] = 0;
champarr[19][4] = 0;
champarr[19][5] = 0;
champarr[19][5] = 0;

champarr[6][0] = "우르곳";
champarr[6][1] = 0;
champarr[6][2] = 0;
champarr[6][3] = 0;
champarr[6][4] = 0;
champarr[6][5] = 0;
champarr[6][5] = 0;

champarr[77][0] = "우디르";
champarr[77][1] = 0;
champarr[77][2] = 0;
champarr[77][3] = 0;
champarr[77][4] = 0;
champarr[77][5] = 0;
champarr[77][5] = 0;

champarr[83][0] = "요릭";
champarr[83][1] = 0;
champarr[83][2] = 0;
champarr[83][3] = 0;
champarr[83][4] = 0;
champarr[83][5] = 0;
champarr[83][5] = 0;

champarr[2][0] = "올라프";
champarr[2][1] = 0;
champarr[2][2] = 0;
champarr[2][3] = 0;
champarr[2][4] = 0;
champarr[2][5] = 0;
champarr[2][5] = 0;

champarr[61][0] = "오리아나";
champarr[61][1] = 0;
champarr[61][2] = 0;
champarr[61][3] = 0;
champarr[61][4] = 0;
champarr[61][5] = 0;
champarr[61][5] = 0;

champarr[516][0] = "오른";
champarr[516][1] = 0;
champarr[516][2] = 0;
champarr[516][3] = 0;
champarr[516][4] = 0;
champarr[516][5] = 0;
champarr[516][5] = 0;

champarr[62][0] = "오공";
champarr[62][1] = 0;
champarr[62][2] = 0;
champarr[62][3] = 0;
champarr[62][4] = 0;
champarr[62][5] = 0;
champarr[62][5] = 0;

champarr[60][0] = "엘리스";
champarr[60][1] = 0;
champarr[60][2] = 0;
champarr[60][3] = 0;
champarr[60][4] = 0;
champarr[60][5] = 0;
champarr[60][5] = 0;

champarr[245][0] = "에코";
champarr[245][1] = 0;
champarr[245][2] = 0;
champarr[245][3] = 0;
champarr[245][4] = 0;
champarr[245][5] = 0;
champarr[245][5] = 0;

champarr[157][0] = "야스오";
champarr[157][1] = 0;
champarr[157][2] = 0;
champarr[157][3] = 0;
champarr[157][4] = 0;
champarr[157][5] = 0;
champarr[157][5] = 0;

champarr[22][0] = "애쉬";
champarr[22][1] = 0;
champarr[22][2] = 0;
champarr[22][3] = 0;
champarr[22][4] = 0;
champarr[22][5] = 0;
champarr[22][5] = 0;

champarr[34][0] = "애니비아";
champarr[34][1] = 0;
champarr[34][2] = 0;
champarr[34][3] = 0;
champarr[34][4] = 0;
champarr[34][5] = 0;
champarr[34][5] = 0;

champarr[1][0] = "애니";
champarr[1][1] = 0;
champarr[1][2] = 0;
champarr[1][3] = 0;
champarr[1][4] = 0;
champarr[1][5] = 0;
champarr[1][5] = 0;

champarr[12][0] = "알리스타";
champarr[12][1] = 0;
champarr[12][2] = 0;
champarr[12][3] = 0;
champarr[12][4] = 0;
champarr[12][5] = 0;
champarr[12][5] = 0;

champarr[523][0] = "아펠리오스";
champarr[523][1] = 0;
champarr[523][2] = 0;
champarr[523][3] = 0;
champarr[523][4] = 0;
champarr[523][5] = 0;
champarr[523][5] = 0;

champarr[266][0] = "아트록스";
champarr[266][1] = 0;
champarr[266][2] = 0;
champarr[266][3] = 0;
champarr[266][4] = 0;
champarr[266][5] = 0;
champarr[266][5] = 0;

champarr[84][0] = "아칼리";
champarr[84][1] = 0;
champarr[84][2] = 0;
champarr[84][3] = 0;
champarr[84][4] = 0;
champarr[84][5] = 0;
champarr[84][5] = 0;

champarr[86][0] = "가렌";
champarr[86][1] = 0;
champarr[86][2] = 0;
champarr[86][3] = 0;
champarr[86][4] = 0;
champarr[86][5] = 0;
champarr[86][6] = 0;

champarr[3][0] = "갈리오";
champarr[3][1] = 0;
champarr[3][2] = 0;
champarr[3][3] = 0;
champarr[3][4] = 0;
champarr[3][5] = 0;
champarr[3][6] = 0;

champarr[41][0] = "갱플랭크";
champarr[41][1] = 0;
champarr[41][2] = 0;
champarr[41][3] = 0;
champarr[41][4] = 0;
champarr[41][5] = 0;
champarr[41][6] = 0;

champarr[79][0] = "그라가스";
champarr[79][1] = 0;
champarr[79][2] = 0;
champarr[79][3] = 0;
champarr[79][4] = 0;
champarr[79][5] = 0;
champarr[79][6] = 0;

champarr[104][0] = "그레이브즈";
champarr[104][1] = 0;
champarr[104][2] = 0;
champarr[104][3] = 0;
champarr[104][4] = 0;
champarr[104][5] = 0;
champarr[104][6] = 0;

champarr[150][0] = "나르";
champarr[150][1] = 0;
champarr[150][2] = 0;
champarr[150][3] = 0;
champarr[150][4] = 0;
champarr[150][5] = 0;
champarr[150][6] = 0;

champarr[267][0] = "나미";
champarr[267][1] = 0;
champarr[267][2] = 0;
champarr[267][3] = 0;
champarr[267][4] = 0;
champarr[267][5] = 0;
champarr[267][6] = 0;

champarr[75][0] = "나서스";
champarr[75][1] = 0;
champarr[75][2] = 0;
champarr[75][3] = 0;
champarr[75][4] = 0;
champarr[75][5] = 0;
champarr[75][6] = 0;

champarr[111][0] = "노틸러스";
champarr[111][1] = 0;
champarr[111][2] = 0;
champarr[111][3] = 0;
champarr[111][4] = 0;
champarr[111][5] = 0;
champarr[111][6] = 0;

champarr[56][0] = "녹턴";
champarr[56][1] = 0;
champarr[56][2] = 0;
champarr[56][3] = 0;
champarr[56][4] = 0;
champarr[56][5] = 0;
champarr[56][6] = 0;

champarr[20][0] = "누누와 윌럼프";
champarr[20][1] = 0;
champarr[20][2] = 0;
champarr[20][3] = 0;
champarr[20][4] = 0;
champarr[20][5] = 0;
champarr[20][6] = 0;

champarr[76][0] = "니달리";
champarr[76][1] = 0;
champarr[76][2] = 0;
champarr[76][3] = 0;
champarr[76][4] = 0;
champarr[76][5] = 0;
champarr[76][6] = 0;

champarr[518][0] = "니코";
champarr[518][1] = 0;
champarr[518][2] = 0;
champarr[518][3] = 0;
champarr[518][4] = 0;
champarr[518][5] = 0;
champarr[518][6] = 0;

champarr[122][0] = "다리우스";
champarr[122][1] = 0;
champarr[122][2] = 0;
champarr[122][3] = 0;
champarr[122][4] = 0;
champarr[122][5] = 0;
champarr[122][6] = 0;

champarr[131][0] = "다이애나";
champarr[131][1] = 0;
champarr[131][2] = 0;
champarr[131][3] = 0;
champarr[131][4] = 0;
champarr[131][5] = 0;
champarr[131][6] = 0;

champarr[119][0] = "드레이븐";
champarr[119][1] = 0;
champarr[119][2] = 0;
champarr[119][3] = 0;
champarr[119][4] = 0;
champarr[119][5] = 0;
champarr[119][6] = 0;

champarr[13][0] = "라이즈";
champarr[13][1] = 0;
champarr[13][2] = 0;
champarr[13][3] = 0;
champarr[13][4] = 0;
champarr[13][5] = 0;
champarr[13][6] = 0;

champarr[497][0] = "라칸";
champarr[497][1] = 0;
champarr[497][2] = 0;
champarr[497][3] = 0;
champarr[497][4] = 0;
champarr[497][5] = 0;
champarr[497][6] = 0;

champarr[33][0] = "람머스";
champarr[33][1] = 0;
champarr[33][2] = 0;
champarr[33][3] = 0;
champarr[33][4] = 0;
champarr[33][5] = 0;
champarr[33][6] = 0;

champarr[99][0] = "럭스";
champarr[99][1] = 0;
champarr[99][2] = 0;
champarr[99][3] = 0;
champarr[99][4] = 0;
champarr[99][5] = 0;
champarr[99][6] = 0;

champarr[68][0] = "럼블";
champarr[68][1] = 0;
champarr[68][2] = 0;
champarr[68][3] = 0;
champarr[68][4] = 0;
champarr[68][5] = 0;
champarr[68][6] = 0;

champarr[58][0] = "레넥톤";
champarr[58][1] = 0;
champarr[58][2] = 0;
champarr[58][3] = 0;
champarr[58][4] = 0;
champarr[58][5] = 0;
champarr[58][6] = 0;

champarr[89][0] = "레오나";
champarr[89][1] = 0;
champarr[89][2] = 0;
champarr[89][3] = 0;
champarr[89][4] = 0;
champarr[89][5] = 0;
champarr[89][6] = 0;

champarr[421][0] = "렉사이";
champarr[421][1] = 0;
champarr[421][2] = 0;
champarr[421][3] = 0;
champarr[421][4] = 0;
champarr[421][5] = 0;
champarr[421][6] = 0;

champarr[107][0] = "렝가";
champarr[107][1] = 0;
champarr[107][2] = 0;
champarr[107][3] = 0;
champarr[107][4] = 0;
champarr[107][5] = 0;
champarr[107][6] = 0;

champarr[236][0] = "루시안";
champarr[236][1] = 0;
champarr[236][2] = 0;
champarr[236][3] = 0;
champarr[236][4] = 0;
champarr[236][5] = 0;
champarr[236][6] = 0;

champarr[117][0] = "룰루";
champarr[117][1] = 0;
champarr[117][2] = 0;
champarr[117][3] = 0;
champarr[117][4] = 0;
champarr[117][5] = 0;
champarr[117][6] = 0;

champarr[7][0] = "르블랑";
champarr[7][1] = 0;
champarr[7][2] = 0;
champarr[7][3] = 0;
champarr[7][4] = 0;
champarr[7][5] = 0;
champarr[7][6] = 0;

champarr[64][0] = "리신";
champarr[64][1] = 0;
champarr[64][2] = 0;
champarr[64][3] = 0;
champarr[64][4] = 0;
champarr[64][5] = 0;
champarr[64][6] = 0;

champarr[92][0] = "리븐";
champarr[92][1] = 0;
champarr[92][2] = 0;
champarr[92][3] = 0;
champarr[92][4] = 0;
champarr[92][5] = 0;
champarr[92][6] = 0;

champarr[127][0] = "리산드라";
champarr[127][1] = 0;
champarr[127][2] = 0;
champarr[127][3] = 0;
champarr[127][4] = 0;
champarr[127][5] = 0;
champarr[127][6] = 0;

champarr[11][0] = "마스터 이";
champarr[11][1] = 0;
champarr[11][2] = 0;
champarr[11][3] = 0;
champarr[11][4] = 0;
champarr[11][5] = 0;
champarr[11][6] = 0;

champarr[57][0] = "마오카이";
champarr[57][1] = 0;
champarr[57][2] = 0;
champarr[57][3] = 0;
champarr[57][4] = 0;
champarr[57][5] = 0;
champarr[57][6] = 0;

champarr[90][0] = "말자하";
champarr[90][1] = 0;
champarr[90][2] = 0;
champarr[90][3] = 0;
champarr[90][4] = 0;
champarr[90][5] = 0;
champarr[90][6] = 0;

champarr[54][0] = "말파이트";
champarr[54][1] = 0;
champarr[54][2] = 0;
champarr[54][3] = 0;
champarr[54][4] = 0;
champarr[54][5] = 0;
champarr[54][6] = 0;

champarr[82][0] = "모데카이저";
champarr[82][1] = 0;
champarr[82][2] = 0;
champarr[82][3] = 0;
champarr[82][4] = 0;
champarr[82][5] = 0;
champarr[82][6] = 0;

champarr[25][0] = "모르가나";
champarr[25][1] = 0;
champarr[25][2] = 0;
champarr[25][3] = 0;
champarr[25][4] = 0;
champarr[25][5] = 0;
champarr[25][6] = 0;

champarr[36][0] = "문도 박사";
champarr[36][1] = 0;
champarr[36][2] = 0;
champarr[36][3] = 0;
champarr[36][4] = 0;
champarr[36][5] = 0;
champarr[36][6] = 0;

champarr[21][0] = "미스 포츈";
champarr[21][1] = 0;
champarr[21][2] = 0;
champarr[21][3] = 0;
champarr[21][4] = 0;
champarr[21][5] = 0;
champarr[21][6] = 0;

champarr[432][0] = "바드";
champarr[432][1] = 0;
champarr[432][2] = 0;
champarr[432][3] = 0;
champarr[432][4] = 0;
champarr[432][5] = 0;
champarr[432][6] = 0;

champarr[110][0] = "바루스";
champarr[110][1] = 0;
champarr[110][2] = 0;
champarr[110][3] = 0;
champarr[110][4] = 0;
champarr[110][5] = 0;
champarr[110][6] = 0;

champarr[254][0] = "바이";
champarr[254][1] = 0;
champarr[254][2] = 0;
champarr[254][3] = 0;
champarr[254][4] = 0;
champarr[254][5] = 0;
champarr[254][6] = 0;

champarr[45][0] = "베이가";
champarr[45][1] = 0;
champarr[45][2] = 0;
champarr[45][3] = 0;
champarr[45][4] = 0;
champarr[45][5] = 0;
champarr[45][6] = 0;

champarr[67][0] = "베인";
champarr[67][1] = 0;
champarr[67][2] = 0;
champarr[67][3] = 0;
champarr[67][4] = 0;
champarr[67][5] = 0;
champarr[67][6] = 0;

champarr[161][0] = "벨코즈";
champarr[161][1] = 0;
champarr[161][2] = 0;
champarr[161][3] = 0;
champarr[161][4] = 0;
champarr[161][5] = 0;
champarr[161][6] = 0;

champarr[106][0] = "볼리베어";
champarr[106][1] = 0;
champarr[106][2] = 0;
champarr[106][3] = 0;
champarr[106][4] = 0;
champarr[106][5] = 0;
champarr[106][6] = 0;

champarr[201][0] = "브라움";
champarr[201][1] = 0;
champarr[201][2] = 0;
champarr[201][3] = 0;
champarr[201][4] = 0;
champarr[201][5] = 0;
champarr[201][6] = 0;

champarr[63][0] = "브랜드";
champarr[63][1] = 0;
champarr[63][2] = 0;
champarr[63][3] = 0;
champarr[63][4] = 0;
champarr[63][5] = 0;
champarr[63][6] = 0;

champarr[8][0] = "블라디미르";
champarr[8][1] = 0;
champarr[8][2] = 0;
champarr[8][3] = 0;
champarr[8][4] = 0;
champarr[8][5] = 0;
champarr[8][6] = 0;

champarr[53][0] = "블리츠크랭크";
champarr[53][1] = 0;
champarr[53][2] = 0;
champarr[53][3] = 0;
champarr[53][4] = 0;
champarr[53][5] = 0;
champarr[53][6] = 0;

champarr[112][0] = "빅토르";
champarr[112][1] = 0;
champarr[112][2] = 0;
champarr[112][3] = 0;
champarr[112][4] = 0;
champarr[112][5] = 0;
champarr[112][6] = 0;

champarr[78][0] = "뽀삐";
champarr[78][1] = 0;
champarr[78][2] = 0;
champarr[78][3] = 0;
champarr[78][4] = 0;
champarr[78][5] = 0;
champarr[78][6] = 0;

champarr[14][0] = "사이온";
champarr[14][1] = 0;
champarr[14][2] = 0;
champarr[14][3] = 0;
champarr[14][4] = 0;
champarr[14][5] = 0;
champarr[14][6] = 0;

champarr[517][0] = "사일러스";
champarr[517][1] = 0;
champarr[517][2] = 0;
champarr[517][3] = 0;
champarr[517][4] = 0;
champarr[517][5] = 0;
champarr[517][6] = 0;

champarr[35][0] = "샤코";
champarr[35][1] = 0;
champarr[35][2] = 0;
champarr[35][3] = 0;
champarr[35][4] = 0;
champarr[35][5] = 0;
champarr[35][6] = 0;

champarr[235][0] = "세나";
champarr[235][1] = 0;
champarr[235][2] = 0;
champarr[235][3] = 0;
champarr[235][4] = 0;
champarr[235][5] = 0;
champarr[235][6] = 0;

champarr[113][0] = "세주아니";
champarr[113][1] = 0;
champarr[113][2] = 0;
champarr[113][3] = 0;
champarr[113][4] = 0;
champarr[113][5] = 0;
champarr[113][6] = 0;

champarr[875][0] = "세트";
champarr[875][1] = 0;
champarr[875][2] = 0;
champarr[875][3] = 0;
champarr[875][4] = 0;
champarr[875][5] = 0;
champarr[875][6] = 0;

champarr[37][0] = "소나";
champarr[37][1] = 0;
champarr[37][2] = 0;
champarr[37][3] = 0;
champarr[37][4] = 0;
champarr[37][5] = 0;
champarr[37][6] = 0;

champarr[16][0] = "소라카";
champarr[16][1] = 0;
champarr[16][2] = 0;
champarr[16][3] = 0;
champarr[16][4] = 0;
champarr[16][5] = 0;
champarr[16][6] = 0;

champarr[98][0] = "쉔";
champarr[98][1] = 0;
champarr[98][2] = 0;
champarr[98][3] = 0;
champarr[98][4] = 0;
champarr[98][5] = 0;
champarr[98][6] = 0;

champarr[102][0] = "쉬바나";
champarr[102][1] = 0;
champarr[102][2] = 0;
champarr[102][3] = 0;
champarr[102][4] = 0;
champarr[102][5] = 0;
champarr[102][6] = 0;

champarr[50][0] = "스웨인";
champarr[50][1] = 0;
champarr[50][2] = 0;
champarr[50][3] = 0;
champarr[50][4] = 0;
champarr[50][5] = 0;
champarr[50][6] = 0;

champarr[72][0] = "스카너";
champarr[72][1] = 0;
champarr[72][2] = 0;
champarr[72][3] = 0;
champarr[72][4] = 0;
champarr[72][5] = 0;
champarr[72][6] = 0;

champarr[15][0] = "시비르";
champarr[15][1] = 0;
champarr[15][2] = 0;
champarr[15][3] = 0;
champarr[15][4] = 0;
champarr[15][5] = 0;
champarr[15][6] = 0;

champarr[5][0] = "신 짜오";
champarr[5][1] = 0;
champarr[5][2] = 0;
champarr[5][3] = 0;
champarr[5][4] = 0;
champarr[5][5] = 0;
champarr[5][6] = 0;

champarr[134][0] = "신드라";
champarr[134][1] = 0;
champarr[134][2] = 0;
champarr[134][3] = 0;
champarr[134][4] = 0;
champarr[134][5] = 0;
champarr[134][6] = 0;

champarr[27][0] = "신지드";
champarr[27][1] = 0;
champarr[27][2] = 0;
champarr[27][3] = 0;
champarr[27][4] = 0;
champarr[27][5] = 0;
champarr[27][6] = 0;

champarr[412][0] = "쓰레쉬";
champarr[412][1] = 0;
champarr[412][2] = 0;
champarr[412][3] = 0;
champarr[412][4] = 0;
champarr[412][5] = 0;
champarr[412][6] = 0;

champarr[103][0] = "아리";
champarr[103][1] = 0;
champarr[103][2] = 0;
champarr[103][3] = 0;
champarr[103][4] = 0;
champarr[103][5] = 0;
champarr[103][6] = 0;

champarr[32][0] = "아무무";
champarr[32][1] = 0;
champarr[32][2] = 0;
champarr[32][3] = 0;
champarr[32][4] = 0;
champarr[32][5] = 0;
champarr[32][6] = 0;

champarr[136][0] = "아우렐리온 솔";
champarr[136][1] = 0;
champarr[136][2] = 0;
champarr[136][3] = 0;
champarr[136][4] = 0;
champarr[136][5] = 0;
champarr[136][6] = 0;

champarr[427][0] = "아이번";
champarr[427][1] = 0;
champarr[427][2] = 0;
champarr[427][3] = 0;
champarr[427][4] = 0;
champarr[427][5] = 0;
champarr[427][6] = 0;

champarr[268][0] = "아지르";
champarr[268][1] = 0;
champarr[268][2] = 0;
champarr[268][3] = 0;
champarr[268][4] = 0;
champarr[268][5] = 0;
champarr[268][6] = 0;





var nickname;
app.get('/', function(req, res){
fs.readFile('youaregg.html', 'utf8', function(err, data){
  res.end(data);
})
});

app.get('/userinfo', function(req,res){
request(url_name(nickname, key), function(err, re, body){
  var userinfo = body;
  userinfo = JSON.parse(userinfo);
  request(url_matchlist(userinfo.accountId, key), function(err, re2, body2){
  var matchlist = body2;
  matchlist2 = JSON.parse(matchlist);
  var tmparr = [];
  var tmparr2 = []
  for(var i =0; i<500; i++){
    tmparr[i] = 0;
  }
  for(var i =0; i<matchlist2.matches.length; i++){
    tmparr[matchlist2.matches[i].champion] = tmparr[matchlist2.matches[i].champion] +1;
  }
  for(var i =0; i<500; i++){
    if(tmparr[i] != 0){
      tmparr2.push([i, tmparr[i]])
    }
  }
  function mlist(arr){
    var tmp = "";
    for(var i =0; i<arr.length; i++){
      tmp = tmp +"<h2>Champion : "+champarr[arr[i][0]][0] + "/ 횟수 : " + arr[i][1] +"</h2>";
    }
    return tmp
  }
  var temp =`
  <!doctype html>
<html>

<head>
    <title>YOUARE.GG</title>
    <meta charset="utf-8">
    <style>
      body{
        background-color: rgb(66, 124, 211);
      }a{
        color:rgb(86, 240, 219);
        font-family: unset;
        text-decoration: none;
      }
    </style>
  </head>

<body>
  <h1><a href="/">YOUARE.GG</a></h1>
  <h2>${userinfo.id}</h2>
  <h2>${userinfo.summonerLevel}</h2>
  ${mlist(tmparr2)}
</body>

</html>
  `;
  res.end(temp);

  })
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