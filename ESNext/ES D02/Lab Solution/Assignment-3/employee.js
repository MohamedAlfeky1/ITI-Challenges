export class Employee {
  constructor(firstName, lastName, age, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export let departments = ["IT", "HR", "Finance", "Sales"];
