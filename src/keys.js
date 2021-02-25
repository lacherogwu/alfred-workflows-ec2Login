const fs = require('fs');

const addNameToArg = process.argv[2] === 'true';

const keys = JSON.parse(fs.readFileSync('keys.json', 'utf-8'));
if(!keys.length) return console.log(JSON.stringify({ items: [{ title: 'Could not find any key', subtitle: `Please add keys using the 'ec2add' keyword` }] }));

let items;
if(!addNameToArg){
    items = keys;
} else {
    const mapped = keys.map(i => ({
        title: i.title,
        subtitle: i.subtitle,
        arg: `${i.title}|${i.arg}`
    }));
    items = mapped;
}

console.log(JSON.stringify({ items }));