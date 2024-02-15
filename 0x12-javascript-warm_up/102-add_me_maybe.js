#!/usr/bin/node
function addMeMaybe (number, codeBack) {
  number++;
  codeBack(number);
}
module.exports = { addMeMaybe };
