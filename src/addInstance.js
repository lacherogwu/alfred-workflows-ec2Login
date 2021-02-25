const fs = require('fs');

const { data, key } = process.env;
if(!key) return console.log(`#ERR Could not find a key, please use the 'ec2add' keyword to add keys`);

const split = data.split(',');
if(split.length < 2) return console.log('#ERR Missing argument, format: name,username@ip');

const [name, connection] = split;
const file = JSON.parse(fs.readFileSync('instances.json', 'utf-8'));

const obj = {
    title: name.trim(),
    subtitle: key.trim(),
    arg: `${connection.trim()}|${name.trim()}|${key.trim()}`
};

file.push(obj);

fs.writeFileSync('instances.json', JSON.stringify(file));

console.log(`${name} added successfully!`);