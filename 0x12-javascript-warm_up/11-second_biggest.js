#!/usr/bin/node

if (process.argv.length < 3) {
  console.log(0);
} else if (process.argv.length > 3) {
  const input = process.argv.slice(2);
  let largestNumber = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAVE_INTEGER;

  for (let i = 0; i < input.length; i++) {
    const num = parseInt(input[i]);

    if (num > largestNumber) {
      secondLargest = largestNumber;
      largestNumber = input[i];
    } else if (num > secondLargest && num !== largestNumber) {
      secondLargest = num;
    }
  }
  console.log(secondLargest);
} else {
  console.log(1);
}
