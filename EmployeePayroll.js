//UC 11 - Created Employee Payroll class
class EmployeePayroll {
    //Properties
    id;
    salary;
    gender;
    startDate;

    //Defining parameterizd constructor of class using constructor keyword
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //Getter and setter methods for properties of class
    get name() { return this._name; }
    set name(name) { this._name = name; }

    //Method to return string of values
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return `Id: ${this.id}, Name: ${this.name}, Salary: ${this.salary}, Gender: ${this.gender}, Start Date: ${empDate}`;
    }
}

//Created obj for class using parameterized constructor
let employPayroll = new EmployeePayroll(1, "Guru", 30000);
console.log(employPayroll.toString());
//Using Set to update values of the properties of class
employPayroll.name = "Guruprasad";
employPayroll.salary = 36000;
console.log(employPayroll.toString());
let newEmployeePayroll = new EmployeePayroll(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayroll);