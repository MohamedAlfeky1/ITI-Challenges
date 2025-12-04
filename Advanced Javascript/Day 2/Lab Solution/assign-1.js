function sumTwoNums() {
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] != "number") {
      throw `❌ Invalid input: all values must be numbers.`;
    }
  }

  if (arguments.length == 0) {
    throw `⚠️ Please provide at least two numbers to calculate the sum.`;
  }

  if (arguments.length == 2) {
    console.log(arguments[0] + arguments[1]);
  } else {
    throw `🚫 You can only sum two numbers at a time.`;
  }
}
// sumTwoNums();
// sumTwoNums(1, 2);
// sumTwoNums(1, 2, 5);
// sumTwoNums(1, "m", 5);
