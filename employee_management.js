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

//Task 3-Create a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department); 
            this.bonus = bonus; 
            this.type = 'Manager'};
    getDetails() {
         return `${super.getDetails()}, Bonus: $${this.bonus}`}}

//Task 5-Create and Manage Departments and Employees

// Create departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

// Create employees
const tiago = new Employee("Tiago", 80000, "Developer", "Engineering");
const ana = new Employee("Ana", 75000, "Designer", "Marketing");
const jose = new Manager("Jose", 120000, "Engineering Manager", "Engineering", 20000);
const adriana = new Manager("Adriana", 130000, "Marketing Manager", "Marketing", 25000);

// Add employees to departments
engineering.addEmployee(tiago);
engineering.addEmployee(jose);
marketing.addEmployee(ana);
marketing.addEmployee(adriana);

// Calculate total salary for each department
const departments = [engineering, marketing]; // Array to hold departments

for (const department of departments) {
    console.log(`Total salary for ${department.name} is $${department.getDepartmentSalary()}`);
    console.log(`Total salary with bonuses for ${department.name} is $${department.calculateTotalSalaryWithBonus()}`)};