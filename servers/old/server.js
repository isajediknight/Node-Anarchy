var http = require('http')
, url = require('url')
, fs = require('fs')
, util = require('util')
, time = require('time')
, server;

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var mongo_url = 'mongodb://localhost:27017/mark1';

server = http.createServer(function(req, res){
var temp = url.parse(req.url).pathname.toLowerCase();
/*
temp = temp.replace("/","athisisaslashreallylongz");
temp = temp.replace(".","athisisadotreallylongz");
temp = temp.replace(/[^a-z\d\s]+/gi, "");
temp = temp.replace("athisisaslashreallylongz","/");
temp = temp.replace("athisisadotreallylongz",".");
*/
temp = unescape(temp);
var path = temp.replace(/[!@#$^&*()+=`~;'"]/g, "");
var now = new time.Date();
var exec = require('child_process').exec;
//date -d @
//new time.Date().toString()
//console.log(req.connection.remoteAddress);
//console.log(req.headers['user-agent']);

switch (path){

  case '/favicon.ico':
    fs.readFile(__dirname+'/images/favicon.ico', function(err, data){
    if (err) return send404(res);
      res.write(data, 'utf8');
      res.end();
    });
  break;

/*
  case '':
    fs.readFile(__dirname+'/pages/home.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('blank');
    exec("echo '\"blank\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;*/

  default:
    MongoClient.connect(mongo_url, function(err, db) {
	    var collection = db.collection("pages");
	    collection.findOne({page:path}, function(err, item) {
	      if(item == null) {
		      return send404(res);
	      }
	      res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(item.data, 'utf8');
              res.end();

	    if (err) {
	      return send404(res);}
	    });
    });
    console.log(path);
    exec("echo '\""+path+"\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
  }
}),

send404 = function(res){
	MongoClient.connect(mongo_url, function(err, db) {
	var collection = db.collection("pages");
	collection.findOne({page:'404'}, function(err, item) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(item.data, 'utf8');
	res.end();
  });});
};

server.listen(1234);