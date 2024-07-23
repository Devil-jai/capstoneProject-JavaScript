
function arrayintersection(arr1,arr2){
    let set1 = new Set(arr1)
    let set2 = new Set(arr2)

    const insertion = [...set1].filter(item => set2.has(item))

    return insertion
    
}

console.log(arrayintersection([1, 2, 2, 3, 4, 5], [2, 3, 3, 6]))
console.log(arrayintersection([70, 20, 30, 50], [30, 40, 50, 60, 70]))