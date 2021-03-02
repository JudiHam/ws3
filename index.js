//ASSIGNMENT: 1. call JSON API from the web, parse it and output on the console.
//Create a web server and query for your favourite movies/series and parse the output as an HTML table on the browser.
//HTML formatted table to the browser. 
//API KEY http://www.omdbapi.com/?t=hangover&apikey=b4f5e62f

const PORT = process.env.PORT || 5000;

//Create the request
var request = require("request");
var http = require("http");

var hangover;
var dirtydancing;
var indy;
var nana;
var jane;
var foodwars;

//Hangover request
request(
    "http://www.omdbapi.com/?s=hangover&apikey=b4f5e62f",
    {json:true},
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        hangover = body;
        console.log(hangover.Search[0].Title);
});

//Indiana Jones Temple of Doom request
request(
    "http://www.omdbapi.com/?s=indiana+jones&apikey=b4f5e62f",
    {json:true},
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        indy = body;
        console.log(indy.Search[2].Title);
});

//Dirty dancing request
request(
    "http://www.omdbapi.com/?s=dirty+dancing&apikey=b4f5e62f",
    {json:true},
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        dirtydancing = body;
        console.log(dirtydancing.Search[0].Title);
});

//NANA request
request(
    "http://www.omdbapi.com/?s=nana&apikey=b4f5e62f",
    {json:true},
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        nana = body;
        console.log(nana.Search[1].Title);
});

request(
    "http://www.omdbapi.com/?s=jane&apikey=b4f5e62f",
    {json:true},
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        jane = body;
        console.log(jane.Search[6].Title);
});

//Food wars request
request(
    "http://www.omdbapi.com/?s=food+wars&apikey=b4f5e62f",
    {json:true},
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        foodwars = body;
        console.log(foodwars.Search[0].Title);
});


//Create server 
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    //Make table
    response.write("<table border='1'>");
    //Add all items to the table: title, year and poster
    response.write("<tr><td>" + hangover.Search[0].Title + "</td>" + "<td>" + hangover.Search[0].Year + "</td>" + "<td><img src='" + hangover.Search[0].Poster + "'></td></tr>");
    response.write("<tr><td>" + indy.Search[2].Title + "</td>" + "<td>" + indy.Search[2].Year + "</td>" + "<td><img src='" + indy.Search[2].Poster + "'></td></tr>");
    response.write("<tr><td>" + dirtydancing.Search[0].Title + "</td>" + "<td>" + dirtydancing.Search[0].Year + "</td>" + "<td><img src='" + dirtydancing.Search[0].Poster + "'></td></tr>");
    response.write("<tr><td>" + jane.Search[6].Title + "</td>" + "<td>" + jane.Search[6].Year + "</td>" + "<td><img src='" + jane.Search[6].Poster + "'></td></tr>");
    response.write("<tr><td>" + nana.Search[1].Title + "</td>" + "<td>" + nana.Search[1].Year + "</td>" + "<td><img src='" + nana.Search[1].Poster + "'></td></tr>");
    response.write("<tr><td>" + foodwars.Search[0].Title + "</td>" + "<td>" + foodwars.Search[0].Year + "</td>" + "<td><img src='" + foodwars.Search[0].Poster + "'></td></tr>");
    response.write("</table>");

    response.end();
}).listen(PORT);
