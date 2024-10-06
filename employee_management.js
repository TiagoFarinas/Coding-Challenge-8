//Task 1-Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name; 
        this.salary = salary; 
        this.position = position; 
        this.department = department; 
        this.type = 'Employee'}
    getDetails() {
        console.log(`Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`)}}
