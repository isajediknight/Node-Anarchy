var p0 = new Promise((resolve, reject) => {
  var temp = '1a';
  setTimeout(resolve, 1000, temp);
 });
var p1 = new Promise((resolve, reject) => {
  var temp = '2a';
  setTimeout(resolve, 1000, temp);
 });
var p2 = new Promise((resolve, reject) => {
  var temp = '3a';
  setTimeout(resolve, 1000, temp);
 });
Promise.all([p0,p1,p2]).then(value => { 
  console.log(value);
  //a
  ((resolve, reject) => {
 //IFREJECTED
});
var p3 = new Promise((resolve, reject) => {
  var temp = '1b';
  setTimeout(resolve, 1000, temp);
 });
var p4 = new Promise((resolve, reject) => {
  var temp = '2b';
  setTimeout(resolve, 1000, temp);
 });
Promise.all([p3,p4]).then(value => { 
  console.log(value);
  //b
  ((resolve, reject) => {
 //IFREJECTED
});
var p5 = new Promise((resolve, reject) => {
  var temp = '1c';
  setTimeout(resolve, 1000, temp);
 });
var p6 = new Promise((resolve, reject) => {
  var temp = '2c';
  setTimeout(resolve, 1000, temp);
 });
Promise.all([p5,p6]).then(value => { 
  console.log(value);
  //c
  ((resolve, reject) => {
 //IFREJECTED
});
}, reason => {
  //console.log(reason)
});
}, reason => {
  //console.log(reason)
});
}, reason => {
  //console.log(reason)
});
