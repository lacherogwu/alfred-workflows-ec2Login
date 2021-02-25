const fs = require('fs');

const split = process.env.data.split(',');

if(split.length < 2) return console.log('#ERR Missing argument, format: name,path');

const [name, path] = split;
const file = JSON.parse(fs.readFileSync('keys.json', 'utf-8'));

const obj = {
    title: name.trim(),
    subtitle: path.trim(),
    arg: path.trim()
};

file.push(obj);

fs.writeFileSync('keys.json', JSON.stringify(file));

console.log(`${name} added successfully!`);