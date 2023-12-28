const fs = require("fs");
const {Transform} = require('stream');
// Create a readable stream
var readStream = fs.createReadStream('input.txt');

// Create a converter
const upperCaseTransformer = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase());
    }
})

// Create a writable stream
var writeStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readStream
.pipe(upperCaseTransformer)
.pipe(writeStream);