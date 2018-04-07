const path = require('path');
str = '/usr/local/www/index.sh';

console.log(path.dirname(str));
console.log(path.basename(str));
console.log(path.extname(str));
console.log(path.parse(str));

obj = { root: '',
dir: 'usr/local/www',
base: 'index.sh',
ext: '.sh',
name: 'index' };

console.log(path.format(obj))