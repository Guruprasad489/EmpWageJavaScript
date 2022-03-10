console.log("Welcome to emp wage program using java script")

//UC1 - Check Employee is present or Absent using Math.Random
const IS_ABSENT=0;
let empcheck = Math.floor(Math.random()*10)%2;
if(empcheck==IS_ABSENT)
{
    console.log("Employee is absent");
}
else
{
console.log("Employee is present");
}