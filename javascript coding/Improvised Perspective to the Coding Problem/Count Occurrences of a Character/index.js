function countOccurrences(str, char) {
    // Write your code here
    return str.split(char).length-1 
}

// Do not modify the below lines
module.exports = { countOccurrences };
console.log(countOccurrences("hello world", "l"))