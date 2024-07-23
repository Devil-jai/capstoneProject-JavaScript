function url(str){
    
    let url =  str.toLowerCase().replace(/ /g,"-")
    return url + ".com"
}

console.log(url( "AlmaBetter Web Dev"))