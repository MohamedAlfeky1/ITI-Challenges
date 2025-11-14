import { Employee } from "./employee.js";

export let empArray = [];
export function addEmp(firstName, lastName, age, salary) {
  let emp = new Employee(firstName, lastName, age, salary);
  empArray.push(emp);
  console.log(empArray);
}

addEmp("ali", "Ahmed", 23, 14000);
addEmp("Said", "Saher", 24, 15000);
addEmp("Mohamed", "Alfeky", 23, 14500);

export function findEmp(arr, empName) {
  if (!empName || !arr.length) {
    console.log("Employee name or array is invalid");
    return;
  }

  const res = arr.find((emp) => emp.firstName === empName);

  if (res) {
    console.log(res);
  } else {
    console.log("Not Found This Employee Name");
  }
}

findEmp(empArray, "Mohamed");
findEmp(empArray, "Nour");

export function increaseEmpSalary(arr, empName, newSalary) {
  const res = arr.map((emp) =>
    emp.firstName === empName ? { ...emp, salary: newSalary } : emp
  );
  return res;
}

console.log(increaseEmpSalary(empArray, "Mohamed", 16000));
