var dunno = require('cmdl_parse_helper');

// Example method call
//console.log(dunno.myDateTime());
ans = dunno.parsed_parameters(['e'],true);

if(!(ans === false)) {
 console.log("\nKeys: " + ans['human_keys']);
 console.log("Good Parameters: " + ans['good_parameters']);
 console.log("Bad Parameters: " + ans['bad_parameters']);
 console.log("Bad Values: " + ans['bad_values']);
}

/*
console.log("Print Class Values Here:");
console.log("Keys: " + dunno.parsed_parameters('defined_keys'));
console.log("Good Parameters: " + dunno.parsed_parameters('good_parameters'));
console.log("Bad Parameters: " + dunno.parsed_parameters('bad_parameters'));
*/

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
