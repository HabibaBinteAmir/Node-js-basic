// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
let number =3;
function conditionalfun(num){
    let nums =0;
    if(num%2==0){
         nums =num/2; 
    }
    else{
         nums =num*2;
    }
     return nums;
}
let evenNumber =conditionalfun(number);
console.log(evenNumber);
