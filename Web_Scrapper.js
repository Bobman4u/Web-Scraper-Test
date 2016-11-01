var http = require("http")

var options = {
  host: 'www.canddi.com',
  port: 80,
  path: '/index.html'
};

http.get(options, function(res) {
  console.log("Got response: " + res.statusCode);
}).on('error', function(err) {
  console.log("Got error: " + err.message);
});
