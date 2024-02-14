#!/usr/bin/node
function computeFactorial (n) {
  n = parseInt(n);

  if (isNaN(n) || n < 0) {
    return 1;
  }

  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * computeFactorial(n - 1);
  }
}

const arg = process.argv[2];

console.log(computeFactorial(arg));
