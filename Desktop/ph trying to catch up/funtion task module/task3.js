// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
const array =[1,2,3,4,5];
function make_avg(num,size){
     let sum =0;
for (const number of num) {
    sum=sum + number;
   
}
return sum/size;
};
let avarageNumber=make_avg(array,array.length);
console.log(avarageNumber);
