#!/root/.nvm/versions/node/v10.24.1/bin/node

const fs = require('fs');
const argv = process.argv;

const filePath = argv[2];

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
