const assert = require('assert');

var data = require(process.argv[2]);

// 1.  it's a good url
assert.ok(data.xpi.indexOf("downloads/latest/")>=0, "data.xpi is not a 'latest' url:" + data.xpi )
console.log("OK: good xpi path")



console.log("OK: page tests correctly")

