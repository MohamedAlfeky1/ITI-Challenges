// Write a function printNames(...names) that accepts any number of student objects  and prints their name using spread operator
const stDiv = document.getElementById("students");

const students = [
  { id: 1, name: "Ali", grade: 80, city: "Cairo" },
  { id: 2, name: "Sara", grade: 92, city: "Alexandria" },
  { id: 3, name: "Omar", grade: 74, city: "Giza" },
  { id: 4, name: "Mona", grade: 88, city: "Cairo" },
];

function printNames(...names) {
  names[0].forEach((st) => {
    let stId = document.createElement("p");
    stId.innerHTML = `Student ID: ${st.id}`;
    stId.classList.add("stId");

    let stName = document.createElement("p");
    stName.innerHTML = `Name: ${st.name}`;

    let stGrade = document.createElement("p");
    stGrade.innerHTML = `Grade: ${st.grade}`;

    let stCity = document.createElement("p");
    stCity.innerHTML = `City: ${st.city}`;

    stDiv.appendChild(stId);
    stDiv.appendChild(stName);
    stDiv.appendChild(stGrade);
    stDiv.appendChild(stCity);
  });
}

printNames(students);
