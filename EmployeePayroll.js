//UC 11 - Created Employee Payroll class
class EmployeePayroll {
    //Properties
    id;
    salary;

    //Defining parameterizd constructor of class using constructor keyword
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //Getter and setter methods for properties of class
    get name() { return this._name };
    set name(name) { this._name = name };

    //Method to return string of values
    toString() {
        return `Id: ${this.id} \tName: ${this.name} \tSalary: ${this.salary}`
    }
}

//Created obj for class using parameterized conbstructor
let employPayroll = new EmployeePayroll(1, "Guru", 30000);
console.log(employPayroll.toString());
//Using Set to update values of the properties of class
employPayroll.name = "Guruprasad";
employPayroll.salary = 36000;
console.log(employPayroll.toString());