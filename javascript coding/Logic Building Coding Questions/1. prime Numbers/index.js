function findPrimes(n) {
    // Initialize a boolean array "isPrime" with true values
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers
  
    for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false;
        }
      }
    }
  
    // Collect all prime numbers
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
  
    return primes;
  }
  
  // Example usage:
  const n = 30;
  console.log(findPrimes(n)); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  