function gcd(a, b) {
    if (b == 0) {
        return a; // Base case: when remainder is 0
    }
    return gcd(b, a % b); // Recursive call
}

// Example Usage
console.log(gcd(48, 18)); // Output: 6
console.log(gcd(56, 98)); // Output: 14
console.log(gcd(101, 103)); // Output: 1 (Prime numbers)
