
global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var xmlhttp = new global.XMLHttpRequest(),
  method = 'GET',
  url = 'https://developer.mozilla.org/';

xmlhttp.open(method, url, false);
xmlhttp.onerror = function () {
  console.log("** An error occurred during the transaction");
};
xmlhttp.onload = 
//xmlhttp.send();