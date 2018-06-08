const path = require('path');
const util = require('util');
const v8 = require('v8');

console.log(path.basename(__filename));

const dirUploads = path.join(__dirname, 'www', 'file', 'uploads');
console.log(dirUploads);

util.log(dirUploads);
util.log(v8.getHeapStatistics());