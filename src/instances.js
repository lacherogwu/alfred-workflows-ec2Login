const fs = require('fs');

const instances = JSON.parse(fs.readFileSync('instances.json', 'utf-8'));

if(!instances.length) return console.log(JSON.stringify({ items: [{ title: 'Could not find any instance', subtitle: `Please add instances using the 'ec2add' keyword` }] }));

console.log(JSON.stringify({ items: instances }));