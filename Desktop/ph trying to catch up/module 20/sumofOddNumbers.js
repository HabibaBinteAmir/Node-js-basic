function funtionsOfOddnumbers(arr) {
    let c = 0;
    let oddArray = [];
    for (const num of arr) {
        if (num % 2 != 0) {
            oddArray.push(num);
        }
    }
    for (const count of oddArray) {
          c=c +count;
    }
    return c /oddArray.length;
}
const array = [4, 2, 5, 6, 9, 10, 3, 4]
let avarege = funtionsOfOddnumbers(array);
console.log(avarege);

// function funtionsOfOddnumbers(arr) {
//     let sum = 0;
//     let count = 0;

//     for (const num of arr) {
//         if (num % 2 !== 0) {
//             sum += num;
//             count++;
//         }
//     }

//     return count === 0 ? 0 : sum / count;
// }