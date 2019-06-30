const path = require('path');
const fs = require('fs');
const solc = require('solc');

const certificatePath = path.resolve(__dirname, 'contracts', 'certificate.sol');
const source = fs.readFileSync(certificatePath, 'utf8');
//console.log(solc.compile(source));
module.exports = solc.compile(source, 1).contracts[':Certificate'];
