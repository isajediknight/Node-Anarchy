var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var mongo_url = 'mongodb://localhost:27017/mark1';
var elements = [];
var begin = [];
var end = [];
var page = [];
var main = [];
var title = [];

var findPages = function(db, my_collection, callback) {
   var cursor = db.collection(my_collection).find();
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
	 if (doc.element != null) {
		elements.push(doc.element);
		begin.push(doc.begin);
		end.push(doc.end);
	 }
      if (doc.page != null) {
		page.push(doc.page);
		main.push(doc.main);
		title.push(doc.title);
	 }
         //console.dir(doc);
	 //console.dir(doc.element);
      } else {
         callback();
      }
   });
};

MongoClient.connect(mongo_url, function(err, db) {
  assert.equal(null, err);
  findPages(db, 'pages', function() {
      db.close();
  });
});

var p1 = new Promise((resolve, reject) => {
	MongoClient.connect(mongo_url, function(err, db) {
	  assert.equal(null, err);
	  findPages(db, 'pages', function() {
	      db.close();
	  });
	});
});

var p2 = new Promise((resolve, reject) => {
	MongoClient.connect(mongo_url, function(err, db) {
	  assert.equal(null, err);
	  findPages(db, 'elements', function() {
	      db.close();
	  });
	});
});

console.log("before 1st promise catch");

Promise.all([p1,p2]).then(value => { 
  console.log(value);
  console.log("all i am is potential code");
  var p3 = new Promise ((resolve, reject) => {
  console.log("truly the war is lost");
  setTimeout(resolve, 2000, "pages and elements queried");
  });

  console.log("i dont understand");
  
//2nd promise catch
Promise.all([p3]).then(value => {
  console.log(page[0]);
  console.log(value);
  console.log("for reals");
}, reason => {
  console.log("not everything has to");
  console.log(reason);
});

//1st promise catch
}, reason => {
  console.log(reason);
  console.log("not really");
});

/*
MongoClient.connect(mongo_url, function(err, db) {
  var collection = db.collection("complete_pages");
  db.complete_pages.drop();
  db.createCollection(“complete_pages”);
  
  collection.findOne({page:path}, function(err, item) {
    if(item == null) {
      return send404(res);
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(item.data, 'utf8');
    res.end();

    if (err) {
      return send404(res);
    }
  });
});

var Q = require('q');
var client = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

client.connect(url, function(err, db) {
  if (err) throw err;

  var promises = [];
  var query = {}; // select all docs
  var collection = db.collection('demo');
  var cursor = collection.find(query);

  // read all docs
  cursor.each(function(err, doc) {
    if (err) throw err;

    if (doc) {

      // create a promise to update the doc
      var query = doc;
      var update = { $set: {hi: 'there'} };

      var promise = 
        Q.npost(collection, 'update', [query, update])
        .then(function(updated){ 
          console.log('Updated: ' + updated); 
        });

      promises.push(promise);
    } else {

      // close the connection after executing all promises
      Q.all(promises)
      .then(function() {
        if (cursor.isClosed()) {
          console.log('all items have been processed');
          db.close();
        }
      })
      .fail(console.error);
    }
  });
});
*/