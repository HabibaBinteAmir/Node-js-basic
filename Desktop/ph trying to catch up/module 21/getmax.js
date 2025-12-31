//get max number in from an array 
const numbers=[23,34,345,45,9645,645,666,7687];
 function getmax(count) {
    let maximum = numbers[0];
    for (const numb of numbers) {
        if ( numb > maximum  )
        maximum = numb;
    }
    return maximum;
 }
 let max =getmax(numbers);
 console.log(max);
 