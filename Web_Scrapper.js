var request = require("request"),
  cheerio = require("cheerio"),
  url = "https://www.canddi.com/contact/";
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);

    var name, phone, email, addressStreet, addressLocal, addressPostal;

    name = $('h4').html();
    phone = $('span[itemprop="telephone"]').html();
    email = $('span[itemprop="email"]').html();
    addressStreet = $('span[itemprop="streetAddress"]').html();
    addressLocal = $('span[itemprop="addressLocality"]').html();
    addressPostal = $('span[itemprop="postalCode"]').html();
      
    console.log("Comapny Name; " + name);
    console.log("Phone; " + phone);
    console.log("Email; " + email);
    console.log("Address; " + addressStreet);
    console.log("         " + addressLocal);
    console.log("         " + addressPostal);
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});