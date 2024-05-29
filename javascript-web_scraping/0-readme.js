#!/usr/bin/node
const fs = require('fs');

const filePath = process.argv[2];

function readFileAndPrint(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
}
readFileAndPrint(filePath);
