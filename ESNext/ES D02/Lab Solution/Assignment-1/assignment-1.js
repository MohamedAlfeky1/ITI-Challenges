/* Assignment 1
1- Create a base class Person with properties: name and age.
2-Create a subclass Teacher with property subject and method teach().
3-Create a subclass Student with property major and method study().
4-Create objects of Teacher and Student, then call their methods.
5-override a method introduce() in both Teacher and Student.
*/

class Person {
  constructor(_id, _name) {
    this.id = _id;
    this.name = _name;
  }
}

class Teacher extends Person {
  constructor(_id, _name, major) {
    super(_id, _name);
    this.major = major;
  }
  teach() {
    return `I'm a Teacher and my ID: ${this.id} - Name: ${this.name} - Major: ${this.major}`;
  }
}

class Student extends Person {
  constructor(_id, _name, major) {
    super(_id, _name);
    this.major = major;
  }
  study() {
    return `I'm a Student and my ID: ${this.id} - Name: ${this.name} - Major: ${this.major}`;
  }
}

let teacher = new Teacher(50, "Ahmed", "CS");
console.log(teacher);
console.log(teacher.teach());

console.log("#".repeat(80));

let student = new Student(40, "Mohamed", "Biotechnology");
console.log(student);
console.log(student.study());
