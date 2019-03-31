const http = require('http');
const routes = require('./routes'); // local router
/*
function reqListener(req,res){ // normal function

};
*/
// http.createServer(reqListener); 
/*
http.createServer(function(req,res){

}); // anonymous function
*/
console.log('exec '+routes.description);
const server = http.createServer(routes.handler); // arrow function


server.listen(3000);