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
var path = url.parse(req.url).pathname.toLowerCase();
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

  case '':
    fs.readFile(__dirname+'/pages/home.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('blank');
    exec("echo '\"blank\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/':
    /*fs.readFile(__dirname+path+'pages/home.html', function(err, data){*/
    MongoClient.connect(mongo_url, function(err, db) {
	    var collection = db.collection("pages");
	    collection.findOne({page:'/'}, function(err, item) {
	      console.log(item.data);
	      res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(item.data, 'utf8');
              res.end();
	    });
    });
    console.log('/');
    exec("echo '\"/\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/what':
    /*fs.readFile(__dirname+path+'pages/home.html', function(err, data){*/
    MongoClient.connect(mongo_url, function(err, db) {
	    var collection = db.collection("pages");
	    collection.findOne({page:'/what'}, function(err, item) {
	      //console.log(item.data);
	      res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(item.data, 'utf8');
              res.end();
	    if (err) console.log('error');
	    /*if (err) return send404(res);
	      res.writeHead(200, {'Content-Type': 'text/html'});
	      res.write(data, 'utf8');
	      res.end();*/
	    });
	    
    });
    console.log('/what');
    exec("echo '\"/what\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;
    
  case '/sample':
    fs.readFile(__dirname+'/pages/sample.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/sample');
    exec("echo '\"/sample\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/about':
    fs.readFile(__dirname+'/pages/about.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/about');
    exec("echo '\"/about\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/free':
    fs.readFile(__dirname+'/pages/free.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/free');
    exec("echo '\"/free\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/how-to':
    fs.readFile(__dirname+'/pages/how-to.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/how-to');
    exec("echo '\"/how-to\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/social':
    fs.readFile(__dirname+'/pages/social.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/social');
    exec("echo '\"/social\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/join':
    fs.readFile(__dirname+'/pages/join.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/join');
    exec("echo '\"/join\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/seasonal':
    fs.readFile(__dirname+'/pages/seasonal.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/seasonal');
    exec("echo '\"/seasonal\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/parties':
    fs.readFile(__dirname+'/pages/parties.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/parties');
    exec("echo '\"/parties\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/free-sample':
    fs.readFile(__dirname+'/pages/free-sample.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/free-sample');
    exec("echo '\"/free-sample\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/contact':
    fs.readFile(__dirname+'/pages/contact.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/contact');
    exec("echo '\"/contact\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/terms':
    fs.readFile(__dirname+'/pages/terms.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/terms');
    exec("echo '\"/terms\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/designed-by':
    fs.readFile(__dirname+'/pages/designed-by.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/designed-by');
    exec("echo '\"/designed-by\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/robots.txt':
    fs.readFile(__dirname+'/pages/robots.txt', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log('/robots.txt');
    exec("echo '\"/robots.txt\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
 break;

  case '/css/styles.css':
    fs.readFile(__dirname + path, function(err, data){
      if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data, 'utf8');
      res.end();
    });
  break;

  case '/css/960.css':
    fs.readFile(__dirname + path, function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data, 'utf8');
      res.end();
    });
  break;

  case '/js/vinfo.js':
    fs.readFile(__dirname + path, function(err, data){
    if (err) return send404(res);
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data, 'utf8');
    res.end();
  });
  break;

  default:
    fs.readFile(__dirname + '/pages/404.html', function(err, data){
    if (err) return send404(res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data, 'utf8');
      res.end();
    });
    console.log(path);
    exec("echo '\""+path+"\",\""+req.connection.remoteAddress+"\",\""+req.headers['user-agent']+"\",\""+(new Date).getTime()+"\"' >> logs/page_hits.log");
  }
}),

send404 = function(res){
  fs.readFile(__dirname + '/pages/404.html', function(err, data){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data, 'utf8');
  res.end();
  });
};

server.listen(1234);