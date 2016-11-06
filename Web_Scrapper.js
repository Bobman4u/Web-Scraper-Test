var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

  url = "https://www.canddi.com/"

  request(url, function(error, response, html){
  		if (!error) {

  			var $ = cheerio.load(html);
			
			var title, phoneNo, address, email

  		};
    });
});

app.listen('8888');

console.log('Localhost 8888');

exports = module.exports = app;