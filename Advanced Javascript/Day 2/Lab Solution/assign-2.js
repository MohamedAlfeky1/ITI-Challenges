function sum(...args) {
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] != "number") {
      throw `❌ Invalid input: all values must be numbers.`;
    }
  }

  if (arguments.length <= 1) {
    throw `⚠️ Please provide at least two numbers to calculate the sum.`;
  }

  let sumNums = args.reduce((acc, curr) => {
    return acc + curr;
  });
  console.log(sumNums);
}

// sum();
// sum(1);
// sum(1, 2, 3, 5);
// sum(1, 2, 3, "m", 4);
