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

        //Task 2-Create a Department Class

        class Department {
            constructor(name) {
                this.name = name;
                this.employees = []};
            addEmployee(employee) {
                if (employee && (employee.type === 'Employee' || employee.type === 'Manager')) {
                    this.employees.push(employee)}};
            getDepartmentSalary() {
                let totalSalary = 0;
                for (const employee of this.employees) {
                    totalSalary += employee.salary};
                return totalSalary};
            calculateTotalSalaryWithBonus() {// Task 4: Handle Bonuses in the Department Salary Calculation
                let totalSalaryWithBonus = 0;
                for (const employee of this.employees) {
                    let bonus = 0; // Initialize bonus
                    if (employee.type === 'Manager') {
                        bonus = employee.bonus}
                    totalSalaryWithBonus += employee.salary + bonus};
                return totalSalaryWithBonus}};