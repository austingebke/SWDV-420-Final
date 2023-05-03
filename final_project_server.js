//This creates the server and renders the pages based on the functions in the project routing file. This puts the server on port 8080.
var http = require('http');
var route=require('./final_project_routing');
http.createServer(route.handleRequest).listen(8080);