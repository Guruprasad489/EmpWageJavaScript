console.log("Welcome to emp wage program using java script")

//UC2 - Ability to Calculate Daily Employee Wage based on part time or full time work 
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;

//UC1 - Check Employee is present or Absent or part time
function getWorkingHours(empCheck)
{
    switch (empCheck) {
        case IS_ABSENT:
            return 0;
            break;
       case IS_PART_TIME:
           return PART_TIME_HOURS; 
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS; 
            break;
    }
}

let empCheck = Math.floor(Math.random() * 3) ;
empHrs=getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR; 
console.log("Emp Hrs: "+ empHrs +", Emp Wage: " + empWage);