import os from "node:os";

console.log(os.hostname());
console.log(os.totalmem()/(1024*1024*1024).toFixed(2));
console.log((os.freemem()/(1024*1024*1024)).toFixed(2));
