function swapchar(str){
    let result = ''
    for(i =0 ; i<str.length ; i+=2){
        if(i+1<str.length){
            result+=str[i+1] + str[i]
        }
        else{
            result+=str[i]
        }
    }
    return result
}

console.log(swapchar("abcdef"))