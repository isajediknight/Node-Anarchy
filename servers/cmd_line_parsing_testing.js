
/********************************************
 * Module Setup BEGIN
 */

// Must be an Array
var my_required_parameters = 'a e b'//['e','a','b']

// Parse Parameters passed in
var dunno = require('cmdl_parse_helper');
var ans = dunno.parsed_parameters(my_required_parameters,true);

// Text Coloration for console.log()
var helper = require('node_anarchy_helper');
var txt = helper.text_coloration();

/*
 * Module Setup END
 *******************************************/

var begin = new Date();

// Debug
//if(ans['required_parameters_met']) {
// console.log("!!!printed from main < "+txt['notify']+"Required"+txt['end']+" "+txt['user']+"Parameters"+txt['end']+" were "+txt['passed']+"met"+txt['end']+"  >")
//}

console.log("\n               Keys: " + txt['subtle']+ans['human_keys'] + txt['end']);
console.log("    Good Parameters: " +txt['passed']+ ans['good_parameters'] + txt['end']);
console.log("     Bad Parameters: " +txt['error'] + ans['bad_parameters'] + txt['end']);
console.log("         Bad Values: " + txt['error'] +ans['bad_values'] + txt['end']);
console.log("  Missed Parameters: " + txt['error']+ans['missed_parameters'] + txt['end']);
console.log("Required Parameters: " + txt['notify']+ ans['required_parameters']+txt['end']);

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

/*
// I love and hate asynchronus code
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two seconds later');
}
*/

// Debug
// Testing Date Diff
var end = new Date("March 10, 2019 23:59:01");
console.log("\n"+txt['subtle']+"<"+txt['end']+" Script Info "+txt['subtle']+">"+txt['end']);
console.log("Current Working Directory: "+txt['hidden']+process.cwd()+txt['end']);
console.log("Program Began: "+txt['date']+begin+txt['end']);
console.log("Script: " +txt['metric']+process.argv[1]+txt['end']);
console.log("Program End: "+txt['date']+end+txt['end']);
console.log(txt['date']+helper.date_diff(begin,end,'human readable')+txt['end']+"\n");

// Debug
//console.log(ans);
