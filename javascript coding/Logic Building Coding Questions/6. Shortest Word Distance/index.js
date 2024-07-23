const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];

function shortestdist(wordsDict,word1,word2){
    
      let index1 = -1;
  let index2 = -1;
  let minDistance = Infinity;

  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) {
      index1 = i;
    }
    if (wordsDict[i] === word2) {
      index2 = i;
    }
    if (index1 !== -1 && index2 !== -1) {
      minDistance = Math.min(minDistance, Math.abs(index1 - index2));
    }
  }

  return minDistance;
}   

console.log(shortestdist(wordsDict, "coding", "makes"))