import fs from "fs";
import path from "path";
import { Employee } from "./Employee";

export class EmployeesRepository {
  constructor(FILENAME) {
    this.FILENAME=FILENAME
  }

  createEmployeeFromLine(line) {
    const employeeData = line.split(", ");
    const employee = new Employee(
      employeeData[1],
      employeeData[0],
      employeeData[2],
      employeeData[3]
    );
    return employee;
  }

  getEmployeesByBirthDate(ourDate) {
     const data = fs.readFileSync(
      path.resolve(__dirname, `${this.FILENAME}`), //`../${fileName}`),
      "UTF-8"
    );

    // split the contents by new line
    const lines = data.split(/\r?\n/);
    lines.shift();
    const employees = lines
      .map((line) => this.createEmployeeFromLine(line))
      .filter((employee) => employee.isBirthday(ourDate));
    return employees
  }

  
}
