const fs = require('fs');

if(!process.env.data) return;

const [name, path] = process.env.data.split('|');

const keys = JSON.parse(fs.readFileSync('keys.json', 'utf-8'));

const index = keys.findIndex(i => i.title === name && escape(i.arg) === escape(path));
if(index < 0) return console.log('#ERR Key not found');

keys.splice(index, 1);
fs.writeFileSync('keys.json', JSON.stringify(keys));

console.log(`${name} removed successfully!`);