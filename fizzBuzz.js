"use strict";

/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as a parameter.
 */

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // Check if the number is divisible by 3 (but not 5)
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // Check if the number is divisible by 5 (but not 3)
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // Otherwise, print the number
    else {
      console.log(i);
    }
  }
}

function main() {
  // Get the value of n from the command-line arguments
  const n = parseInt(process.argv[2], 10);

  // Check if n is a valid integer
  if (isNaN(n) || n <= 0) {
    console.log(
      "Please provide a positive integer greater than 0 as the argument."
    );
  } else {
    fizzBuzz(n);
  }
}

main();
