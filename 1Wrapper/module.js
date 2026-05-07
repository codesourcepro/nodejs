const fs = require('fs');
const os = require('os');

fs.writeFileSync("modulesDummy.txt", "trying with modules");

console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());


// global object
// no need to import
console.log("first");
console.log(process.cwd);
console.log(process.pid);


// js console vs node console

