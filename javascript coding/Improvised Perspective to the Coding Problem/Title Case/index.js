function titleCase(sentence) {
    // write your code here
const words = sentence.toLowerCase().split(' ');

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
// }

const rr = words.map(word=>{
    return word = word.charAt(0).toUpperCase() + word.slice(1)
})

return rr.join(' ');
}

// Do not modify the below lines
module.exports = { titleCase };

console.log(titleCase("Be yourself; everyone else is already taken."))