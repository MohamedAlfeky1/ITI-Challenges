// function 1
const reverseArr = (...arr) => arr.reverse();

console.log("Function 1", reverseArr(1, 2, 3, 4));

// function 2
function newReverseArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number") {
      throw `❌ Invalid input: all values must be numbers.`;
    }
  }

  if (arr.length <= 1) {
    throw `⚠️ Please provide at least two numbers to reverse them.`;
  }

  let newRenersedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newRenersedArr.push(arr[i]);
  }
  return newRenersedArr;
}
console.log("Function 2", newReverseArr([1, 2, 3, 4]));
