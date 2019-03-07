// Purpose:
// To print color options to the screen for reference

// Text Coloration for console.log()
var helper = require('node_anarchy_helper');
var txt = helper.text_coloration();

/*************************************** 
 * Color Reference
 *
 * 'hidden'   :'\033[0;30m', //black
 * 'hidden!'  :'\033[1;30m', //dark_gray
 * 'error'    :'\033[0;31m', //red
 * 'error!'   :'\033[1;31m', //light_red
 * 'passed'   :'\033[0;32m', //green
 * 'passed!'  :'\033[1;32m', //light_green
 * 'notify'   :'\033[0;33m', //brown_orange
 * 'warning!' :'\033[1;33m', //yellow
 * 'metric'   :'\033[0;34m', //blue
 * 'metric!'  :'\033[1;34m', //light_blue
 * 'user'     :'\033[0;35m', //purple
 * 'user!'    :'\033[1;35m', //light_purple
 * 'date'     :'\033[0;36m', //cyan
 * 'date!'    :'\033[1;36m', //light_cyan
 * 'subtle'   :'\033[0;37m', //light_gray
 * 'white!'   :'\033[1;37m', //white
 *
 **************************************/

// Details
console.log("");
console.log("   Example Color         Shortcut");
console.log("   test\n");
console.log("   "+txt['dark_gray']+"test"+txt['end']+"    dark_gray     hidden!");
console.log("   "+txt['light_red']+"test"+txt['end']+"    light_red     error!");
console.log("   "+txt['light_green']+"test"+txt['end']+"    light_green   passed!");
console.log("   "+txt['yellow']+"test"+txt['end']+"    yellow        warning!");
console.log("   "+txt['light_blue']+"test"+txt['end']+"    light_blue    metric!");
console.log("   "+txt['light_purple']+"test"+txt['end']+"    light_purple  user!");
console.log("   "+txt['light_cyan']+"test"+txt['end']+"    light_cyan    date!");
console.log("   "+txt['white']+"test"+txt['end']+"    white         white!\n");
console.log("   "+txt['black']+"test"+txt['end']+"    black         hidden");
console.log("   "+txt['red']+"test"+txt['end']+"    red           error");
console.log("   "+txt['green']+"test"+txt['end']+"    green         passed");
console.log("   "+txt['brown_orange']+"test"+txt['end']+"    brown_orange  notify");
console.log("   "+txt['blue']+"test"+txt['end']+"    blue          metric");
console.log("   "+txt['purple']+"test"+txt['end']+"    purple        user");
console.log("   "+txt['cyan']+"test"+txt['end']+"    cyan          date");
console.log("   "+txt['light_gray']+"test"+txt['end']+"    light_gray    subtle\n");

// Testing
console.log(txt['white']+"Hello Dear!"+txt['end']);
console.log("I wanted to take a "+txt['yellow']+"moment"+txt['end']+" and show you what I learned yesterday.");
console.log("Your favorite color is "+txt['purple']+"Purple"+txt['end']+".  My favorite color "+txt['light_green']+"is"+txt['end']+" "+txt['green']+"Green"+txt['end']+".");
console.log("Last year "+txt['light_cyan']+"James"+txt['end']+" played for the "+txt['brown_orange']+"Giants"+txt['end']+".");
console.log("I will "+txt['red']+"always"+txt['end']+" "+txt['light_red']+"Love"+txt['end']+" you!");

// Comparison
console.log("\n"+txt['light_gray']+"The wife was not impressed..."+txt['end']);
console.log("Is "+txt['light_gray']+"light"+txt['end']+" gray "+txt['light_gray']+"color"+txt['end']+" different "+txt['light_gray']+"really"+txt['end']+" noticeable?\n");

