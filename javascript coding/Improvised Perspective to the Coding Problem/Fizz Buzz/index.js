function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        // if (i % 3 === 0 && i % 4 === 0) {
        //     result.push("FizzBuzz");
        // } else if (i % 3 === 0) {
        //     result.push("Fizz");
        // } else if (i % 4 === 0) {
        //     result.push("Buzz");
        // } else {
        //     result.push(i.toString());
        // }

        switch (true) {
            case i % 3 === 0 && i % 4 === 0: 
                result.push("FizzBuzz")
                break;
            case i % 3 === 0:
                result.push("Fizz")
                break;
            case i % 4 === 0:  
                result.push("Buzz")
                break;
            default: 
                result.push(i.toString())
                break;
        }
    }

    return result;

}
console.log(fizzBuzz(5))

// Do not modify the below lines
module.enports = { fizzBuzz };