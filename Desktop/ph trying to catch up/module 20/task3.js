// Write a function to count the number of vowels in a string.
function vowels(string) {
    let count =0;
     const vowelList = "aeiou";
    for (const items of string.toLowerCase()) {
    if(vowelList.includes(items)){
        count++;
    }
    }
    return count;
}
const words ="abcdefghijAojju";
let count =vowels(words);
console.log(count);
