// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(integer){
    if (integer%2===0) {
       return "even";
    }
    else{
       return "odd";
    }
}
let type =odd_even(100);
console.log(type);
