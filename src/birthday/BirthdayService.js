import { EmployeesRepository } from "./EmployeesRepository";

export class BirthdayService {
  constructor(greetingDelivery, employeesRepository) {
    this.greetingDelivery=greetingDelivery
    this.employeesRepository=employeesRepository
  }

  sendGreetings(ourDate) {
    const employees=this.employeesRepository.getEmployeesByBirthDate(ourDate);

    employees.forEach((employee) => {
      this.greetingDelivery.sendGreetingToEmployee(employee);
    });
  }

}
