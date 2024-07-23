function findMove(currentState) {
    const possibleStates = [];
    
    for (let i = 0; i < currentState.length - 1; i++) {
      if (currentState[i] === '+' && currentState[i + 1] === '+') {
        let newState = currentState.slice(0, i) + '--' + currentState.slice(i + 2);
        possibleStates.push(newState);
      }
    }
    
    return possibleStates;
  }
  
  // Example usage:
  const currentState1 = "++++";
  console.log(findMove(currentState1)); 
  
  const currentState2 = "++--++";
  console.log(findMove(currentState2));
  