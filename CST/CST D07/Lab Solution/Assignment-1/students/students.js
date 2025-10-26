var students = [
  { id: 1, name: "Ali", age: 20, Crs: "CS" },
  { id: 2, name: "Sara", age: 22, Crs: "Math" },
  { id: 3, name: "Omar", age: 19, Crs: "Physics" },
  { id: 4, name: "Laila", age: 21, Crs: "CS" },
  { id: 5, name: "Hassan", age: 23, Crs: "Engineering" },
  { id: 6, name: "Mona", age: 20, Crs: "Biology" },
  { id: 7, name: "Kareem", age: 24, Crs: "Math" },
  { id: 8, name: "Noor", age: 18, Crs: "CS" },
];

var select = document.querySelector("#students");

for (var i = 0; i < students.length; i++) {
  var studentsIdsOptions = document.createElement("option");
  studentsIdsOptions.value = students[i].id;
  studentsIdsOptions.innerHTML = "Student ID:" + students[i].id;
  select.appendChild(studentsIdsOptions);
}

// When i Click on student display it's Info
var options = document.querySelectorAll("#students option");

select.addEventListener("change", function (e) {
  var oldInfo = document.querySelector("#info");
  if (oldInfo) {
    oldInfo.remove();
  }

  var selectedStudent = students.filter(
    (ele) => ele.id === Number(e.target.value)
  )[0]; // return an Obj

  var infoDiv = document.createElement("div");
  infoDiv.id = "info";

  var stID = document.createElement("h1");
  stID.innerHTML = "Student ID: " + selectedStudent.id;
  infoDiv.appendChild(stID);

  var stName = document.createElement("h1");
  stName.innerHTML = "Student Name: " + selectedStudent.name;
  infoDiv.appendChild(stName);

  var stAge = document.createElement("h1");
  stAge.innerHTML = "Student Age: " + selectedStudent.age;
  infoDiv.appendChild(stAge);

  var stCrs = document.createElement("h1");
  stCrs.innerHTML = "Student Courses: " + selectedStudent.Crs;
  infoDiv.appendChild(stCrs);

  document.body.appendChild(infoDiv);
});
