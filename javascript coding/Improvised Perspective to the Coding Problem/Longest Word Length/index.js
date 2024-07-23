function findLongestWord(sentence) {
    // Write your code here
const words = sentence.split(' ');
let maxLength = 0;

for (let word of words) {

    const length = word.length;
    if (length > maxLength) {
        maxLength = length;
    }
}

return maxLength;
}

// Do not modify the below lines
module.exports = { findLongestWord };

console.log(findLongestWord("Coding is fun with fellow learners"))