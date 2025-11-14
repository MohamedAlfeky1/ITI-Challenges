function createCounter() {
  let i = 0;
  return function () {
    i++;
    return i;
  };
}
let increase1 = createCounter();
let increase2 = createCounter();

console.log(increase1()); // 1
console.log(increase1()); // 2

console.log(increase2()); // 1
console.log(increase2()); // 2

/* Explain
This function returns another function, which makes it a closure.

I called the main function twice and stored the result in two variables: increase1 and increase2.  
Each one has its own variable i.

In line 11, when I called increase1(), it increased i from 0 to 1.  
Since the function remembers its variable, the next call in line 12 increased i again from 1 to 2.

In line 14, increase2() started its own count, so it returned 1, not 3.  
That’s because increase2 has a different i from increase1.
*/

//////////////////////////////////////
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

/*
Because 'var' is function-scoped (not block-scoped), there is only one 'i' shared across all iterations
When the loop runs, it quickly increases 'i' from 0 to 5 before any of the setTimeout callbacks are executed

now every iteration refers to the same variable 'i'

On each iteration, setTimeout() is called
  - The callback inside setTimeout is stored in the event queue to run later after the main code finishes
  - The delay is 0 ms, but that doesn’t mean it runs immediately it still waits until the current call stack is clear

The loop keeps running until i reaches 5
  - While the callbacks are waiting, the loop continues and keeps updating the same variable 'i' (0 → 1 → 2 → 3 → 4 → 5)

After the loop finishes, i = 5
  - Only now do the callbacks in the event queue start executing
  - Each callback tries to log 'i', but since all of them share the same variable, and its final value is 5, they all print 5

*/

//////////////////////////////////////
var a = 10;
function foo() {
  console.log(a);
}
foo();

// it will print 10 because var is global in window object so 'i' can access it anywhere

////////////////////////////////////////
var a = 10;
function foo() {
  var a = 20;
  console.log(a);
}
a = 30;
foo();

// It will print 20 because inside the function there’s a local variable 'a'
// The function always uses its own variable first, so it ignores the global one

////////////////////////////////////////
function outerFunc() {
  let a = 10;
  function innerFunc() {
    console.log(a);
  }
  return innerFunc;
}

let innerFunc = outerFunc();

innerFunc();

/*
1. The JavaScript engine starts running the code and sees outerFunc()
  - It adds outerFunc to the call stack

2. Inside outerFunc, a variable a is created and set to 10
  - Then a new function innerFunc is defined (but not executed yet)
  - Instead of running it the outerFunc returns the function itself

3. After returning, outerFunc is removed from the call stack
  - Normally, when a function finishes, its local variables are destroyed
  - But here’s this will not happen because innerFunc was returned and it still remembers the variables from outerFunc scope

4. when we call innerFunc():
  - innerFunc is assign outerFunc() that return innerFunc()
  - It looks for `a` inside its own scope then checks its outer scope 
  - It finds `a = 10` and logs it to the console

Output → `10`

*/
/////////////////////////////////////////
var a = 10;
function foo() {
  console.log(a);
}

function bar() {
  var a = 20;
  foo();
}

bar();

/*
Output: 10

Explanation:
  -'foo' uses the variable 'a' from the global scope where it was defined not from 'bar' Even though 'bar' has its own 'a = 20'
*/
