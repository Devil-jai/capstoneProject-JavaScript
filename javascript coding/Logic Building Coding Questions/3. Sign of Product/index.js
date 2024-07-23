function signofproduct(arr){
    for(i=0 ; i<=arr.length ; i++){
        if(arr[i] == 0){
            return 0
        }
        else if(arr[i] <1){
            return -1
        }
        
    }
    return 1
}
console.log(signofproduct([1, 2, 0]))