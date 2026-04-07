const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.resolve(__dirname, '../../lib/isBetween.js');
const code = fs.readFileSync(filePath, 'utf8');
vm.runInThisContext(code);
