#!/usr/bin/node
const input = parseInt(process.argv[2]);
let character = '';
if (isNaN(input)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < input; i++) {
    for (let n = 0; n < input; n++) {
      character += 'X';
    }
    console.log(character);
    character = '';
  }
}
