const nums=[23,34, 67,50,87];
let sum =0;
function sumOfAllNumbers(number) {
   for (const numbers of nums) {
   
    sum =sum + numbers;
    
   }
    return sum;
}
const total =sumOfAllNumbers(nums);
console.log("sum of all number is ",total);