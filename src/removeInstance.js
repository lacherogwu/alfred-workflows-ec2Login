const fs = require('fs');

const instances = JSON.parse(fs.readFileSync('instances.json', 'utf-8'));

const { data } = process.env;
if(!data) return;

const filtered = instances.filter(i => i.arg !== data);

fs.writeFileSync('instances.json', JSON.stringify(filtered));

console.log(`${data.split('|')[1]} removed successfully!`);