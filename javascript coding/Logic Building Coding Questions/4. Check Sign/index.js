function checksign(num1,num2,num3){
    let positivecount = 0
    let negativecount = 0

    if(num1>0){
        positivecount++
    }
    else negativecount++

    if(num2>0) positivecount++
    else negativecount++

    if(num3>0) positivecount++
    else negativecount++

    if(positivecount===3){
        return "+++"
    }
    else if(positivecount === 2) return "++-"
    else if(positivecount === 1) return "+--"
    else return "---"
    
}

console.log(checksign( 2, 5, 7))