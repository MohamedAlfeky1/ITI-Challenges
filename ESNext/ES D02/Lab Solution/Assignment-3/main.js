import * as Emp from "./employee.js";
import * as Ops from "./employeeOps.js";

Ops.addEmp("Ali", "Hassan", 30, 6000);
Ops.addEmp("Omar", "Tarek", 27, 5500);

document.body.innerHTML = `
  <h2>All Employees</h2>
  <ul>
    ${Ops.empArray
      .map(
        (emp) => `
        <li>
          <strong>${emp.getFullName()}</strong> —
          Age: ${emp.age}, Salary: ${emp.salary} EGP
        </li>`
      )
      .join("")}
  </ul>
  <h3>Departments: ${Emp.departments.join(", ")}</h3>
`;
