
function insert7(str){
    let result = " "
    let count = 0
    for(i=0 ; i<str.length ; i++){
        if(str[i]!==' '){
            count++
        }
        result+= str[i]
        if(count===6){
            result+="7"
            count=0
        }

    }
    return result
}
console.log(insert7("Hello World and Universe!"))
console.log(insert7("Full Stack Web Development"))
