var request = require("request"),
  cheerio = require("cheerio"),
  url = "https://www.canddi.com/contact/";
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);

    var name, phone, email, address;

    name = $("[h4].firstChild.data").html();
    phone = $().html();
    email = $().html();
    address = $().html();
      
    console.log("Comapny Name; " + name);
    console.log("Phone; " + phone);
    console.log("Email; " + email);
    console.log("Address; " + address);
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});