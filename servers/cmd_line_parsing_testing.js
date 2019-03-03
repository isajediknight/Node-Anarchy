var argv = require('minimist')(process.argv.slice(2));
var dunno = require('cmdl_parse_helper');

console.log(dunno.myDateTime());

/*
 * Debugging
console.log("Passed in parameters:");
console.dir(argv);
console.log("");
*/

/*
// List of all actual keys
var keys = Object.keys(argv);
//console.log(keys);// Debugging

// List of human defined keys passed in
var defined_keys = []

// Parameters with no Value passed in
var bad_parameters = []

// Correct Paramters
var good_parameters = []

for (var index = 0; index < keys.length; index++) {
 //console.log(keys[index] + ": "+ argv[keys[index]]);
 if(argv[keys[index]] === true) {
  bad_parameters.push(keys[index]);
  defined_keys.push(keys[index]);
 }
 else if((argv[keys[index]] != null) && (keys[index] != '_')) {
  good_parameters.push(keys[index]);
  defined_keys.push(keys[index]);
 }
}

console.log("\nKeys: " + defined_keys);
console.log("Good Parameters: " + good_parameters);
console.log("Bad Parameters: " + bad_parameters);

// Values with no Parameter passed in
var bad_values = []

for (index = 0; index < argv['_'].length; index++) {
 if(argv[['_'][index]] == null) {
  //pass
 }
 else {
  bad_values.push(argv[['_'][index]])
 }
}

console.log("Bad Values: " + bad_values + "\n");
*/

console.log("Print Class Values Here:");
console.log("Keys: " + dunno.parsed_parameters('defined_keys'));
console.log("Good Parameters: " + dunno.parsed_parameters('good_parameters'));
console.log("Bad Parameters: " + dunno.parsed_parameters('bad_parameters'));

/*
 * Debugging
console.log("Array Loop:");
var argv_len = process.argv.length;
for (var i = 0; i < argv_len; i++) {
 console.log(process.argv[i]);
}
console.log("");

if(argv['_'].length === 0){
 console.log("All parameters have corresponding values!\n");
}
*/

/*
 * Loop through required Parameters here?
if(typeof argv['a'] === 'undefined') {
 console.log("'a' was not passed in as a parameter");
}
else if (argv['_'].includes('a')) {
 console.log("'a' was passed in but without a value");
}
else {
 console.log("a: " + argv['a']);
}
*/
