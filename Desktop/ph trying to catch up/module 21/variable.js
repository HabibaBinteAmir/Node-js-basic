/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var perPerson = area/2;
console.log(perPerson);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money>= 25000) {
    console.log("Laptop");
}
else if (money>= 10000) {
      console.log("Cycle");
}
else{
    console.log("Chocolate");
    
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
 for (let i = 1; i<=lastDay; i++) {
    if (i%3==0) {
        console.log( i + "-" + "medicine");
        
    }
    else{
        console.log( i + "-" + "rest");
        
    }  
 }
/** Problem 04 - (Delete / Store) */
var fileName= "#exp.mp4";
//write your code here


if (fileName.includes("#") || fileName.includes(".pdf") || fileName.includes(".docx")) {
    console.log("Store");
}
else{
    console.log("Delete");
    
}




/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
console.log(`${student.name}${student.roll}@ph.ac.bd`);






/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here
let salary = startingSalary;
for (let i = 1; i <= experience ; i++) {
    salary += salary * 0.05;
    
}
salary =salary.toFixed(2);
console.log(salary);




