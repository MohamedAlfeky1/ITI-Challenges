const students = [
  { id: 1, name: "Ali", grade: 80, city: "Cairo" },
  { id: 2, name: "Sara", grade: 92, city: "Alexandria" },
  { id: 3, name: "Omar", grade: 74, city: "Giza" },
  { id: 4, name: "Mona", grade: 88, city: "Cairo" },
];

// 1- Create a new array that contains only the names of students using arrow functions.
// function namesArr(obj) {
//   let stName = obj.map((st) => st.name);
//   return stName;
// }
// console.log(namesArr(students));
// ----------------------------------------------------------------------------------------------------------------

// 2- Get all students who have a grade greater than or equal to 85.(filter)
// let studentsWithHighGrades = students.filter((st) => st.grade <= 85);
// console.log(studentsWithHighGrades);
// ----------------------------------------------------------------------------------------------------------------

// 3- Find the student whose name is "Sara".( list object details)
// let findSara = students.find((st) => st.name.toLowerCase() === "sara");
// console.log(findSara);
// ----------------------------------------------------------------------------------------------------------------

// 4- Calculate the average grade of all students.(reduce)
// const getAvrgGrades = (students) => {
//   const sumGrades = students.reduce((acc, st) => acc + st.grade, 0);
//   return Math.round(sumGrades / students.length);
// };
// console.log(getAvrgGrades(students));
// ----------------------------------------------------------------------------------------------------------------

// 5- Sort students by grade (descending) using arrow function in sort.
// let desSort = students.sort((a, b) => a.grade - b.grade);
// console.log(desSort);
// ----------------------------------------------------------------------------------------------------------------

// 6- Print Students using forEach arr fun
// const stDiv = document.getElementById("students");
// students.forEach((st) => {
//   let stId = document.createElement("p");
//   stId.innerHTML = `Student ID: ${st.id}`;
//   stId.classList.add("stId");

//   let stName = document.createElement("p");
//   stName.innerHTML = `Name: ${st.name}`;

//   let stGrade = document.createElement("p");
//   stGrade.innerHTML = `Grade: ${st.grade}`;

//   let stCity = document.createElement("p");
//   stCity.innerHTML = `City: ${st.city}`;

//   stDiv.appendChild(stId);
//   stDiv.appendChild(stName);
//   stDiv.appendChild(stGrade);
//   stDiv.appendChild(stCity);
// });
// ----------------------------------------------------------------------------------------------------------------

// 7- Make a shallow copy of the students array using spread.
// let newArr = [...students];
// newArr[0].name = "Alfeky";
// console.log(newArr[0]);
// ----------------------------------------------------------------------------------------------------------------

// 8- Add a new student object into the array using spread.
let newStudentArr1 = [...students];
let idCounter1 = newStudentArr1.length + 1;

newStudentArr1.push({
  id: idCounter1++,
  name: "mohamed",
  grade: 90,
  city: "Cairo",
});
newStudentArr1.push({
  id: idCounter1++,
  name: "asasd",
  grade: 90,
  city: "Caasdasdiro",
});
console.log(newStudentArr1);

// another solution
let newStudentArr2 = [
  ...students,
  { id: idCounter++, name: "Said", grade: 90, city: "Cairo" },
];
console.log(newStudentArr2);

// ----------------------------------------------------------------------------------------------------------------
