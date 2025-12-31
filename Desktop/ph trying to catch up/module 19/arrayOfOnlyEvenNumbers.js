
let narry =[2,3,4,5,6,7,8,9,0]
let evenArray = [];
function evenNumber(num) {
    for (const num of narry) {
        if (num % 2 == 0) {
            evenArray.push(num);
        }

    }
    return evenArray;
}
let even = evenNumber(narry);
console.log(even);


