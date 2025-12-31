//write a funtion which will give me some of all numbers in an array 
function sumofallNumbers(number) {
    console.log(number);
    let sum=0;
    for (const num of number) {
     console.log(num);
     sum=sum+num;
        
    }
    return sum;
}
const arr =[2,3,4,5,6];
const sum =sumofallNumbers(arr);
console.log('sum of all number is ',sum);

