const fs = require('fs');
let content = fs.readFileSync('public/isletmelogo.svg', 'utf8');
content = content.replaceAll('stroke="black"', 'stroke="white"').replaceAll('fill="black"', 'fill="white"');
fs.writeFileSync('public/isletmelogo-white.svg', content);
console.log('Done!');
