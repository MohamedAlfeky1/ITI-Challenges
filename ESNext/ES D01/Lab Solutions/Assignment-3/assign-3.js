// Try all cases in lecture to confirm diffrences between var , let , const

// 1️⃣ Scope difference
// function testScope() {
//   if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//   }

//   console.log(a); // ✅ works → 10
//   console.log(b); // ❌ ReferenceError
//   console.log(c); // ❌ ReferenceError
// }
// testScope();
// ----------------------------------------------------------------------------------------------------------------

// 2️⃣ Redeclaration difference
// var can be redeclared in the same scope
// var x = 5;
// var x = 10; // ✅ works
// console.log(x); // 10

// let and const cannot be redeclared in the same scope
// let y = 5;
// let y = 10; // ❌ SyntaxError

// const z = 5;
// const z = 10; // ❌ SyntaxError

// ----------------------------------------------------------------------------------------------------------------
// 3️⃣ Reassignment difference
// var and let can be reassigned
// var name1 = "Ali";
// name1 = "Sara"; // ✅ works

// let name2 = "Omar";
// name2 = "Mona"; // ✅ works

// const cannot be reassigned
// const name3 = "Ahmed";
// name3 = "Hany"; // ❌ TypeError

// ----------------------------------------------------------------------------------------------------------------
// 4️⃣ Hoisting behavior
// var is hoisted and initialized with undefined
// console.log(a); // ✅ undefined
// var a = 5;

// let and const are hoisted but in the Temporal Dead Zone
// console.log(b); // ❌ ReferenceError
// let b = 10;

// console.log(c); // ❌ ReferenceError
// const c = 15;

// ----------------------------------------------------------------------------------------------------------------
// 5️⃣ Inside loops
// var is not block-scoped → one variable shared in the loop
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log("var:", i), 100);
// }
// Output: var: 3, var: 3, var: 3

// let is block-scoped → new variable for each iteration
// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log("let:", j), 100);
// }
// Output: let: 0, let: 1, let: 2

// ----------------------------------------------------------------------------------------------------------------
// 6️⃣ const with objects and arrays

// const person = { name: "Ali" };
// person.name = "Sara"; // ✅ allowed (object is mutable)
// console.log(person.name); // "Sara"

// const nums = [1, 2, 3];
// nums.push(4); // ✅ allowed
// console.log(nums); // [1, 2, 3, 4]

// nums = [5, 6, 7]; // TypeError
