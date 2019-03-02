var argv = require('minimist')(process.argv.slice(2));

console.log("Passed in parameters:");
console.dir(argv);
console.log("");

console.log("Keys:");
console.log(Object.keys(argv) + "\n");

console.log("Array Loop:");
var argv_len = process.argv.length;
for (var i = 0; i < argv_len; i++) {
  console.log(process.argv[i]);
}
console.log("");


if(argv['_'].length === 0){
  console.log("All parameters have corresponding values!\n");
}

if(typeof argv['a'] === 'undefined') {
  console.log("'a' was not passed in as a parameter");
}
else if (argv['_'].includes('a')) {
  console.log("'a' was passed in but without a value");
}
else {
  console.log("a: " + argv['a']);
}

