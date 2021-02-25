const fs = require('fs');

['instances', 'keys'].forEach(i => fs.writeFileSync(`${i}.json`, '[]'));

console.log('Files have been reset successfully!');