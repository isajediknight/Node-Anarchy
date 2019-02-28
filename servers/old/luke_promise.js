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

function myFunction() {
  //pass
}

var p1 = new Promise((resolve, reject) => {
MongoClient.connect(mongo_url, function(err, db) {
var cursor = db.collection('pages').find();
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
	if (doc.page != null) {
		page.push(doc.page);
		main.push(doc.main);
		title.push(doc.title);
	 }
      }
      db.close();
});
});
console.log(page);
});

Promise.all([p1]).then(value => { 
  console.log("hello");
  });

setTimeout(myFunction, 3000);
  
console.log("end");
