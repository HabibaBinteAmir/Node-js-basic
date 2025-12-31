// // Write a function to find the longest word in a given string.
// // sample-input: I am learning Programming to become a programmer
// // sample-output: Programming

// Split the sentence into words
// Keep track of the longest word so far
// Compare lengths one by one
// Return the longest word

function longestWord(str) {
    const word = str.split(" ");
       let longest = "";
    for (const words of word) {
        if (words.length>longest.length) {
            longest =words;
        }
    } 
    return longest;
}
const string = "I am learning Programming to become a programmer"
const longest = longestWord(string);
console.log(longest);
