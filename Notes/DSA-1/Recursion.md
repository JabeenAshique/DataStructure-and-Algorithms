- Recursion is a problem-solving technique in which a function calls itself to solve smaller instances of the same problem. This process continues until a base condition (stopping condition) is met, preventing infinite looping.

- 💡 Definition:
Recursion is a method where a function calls itself within its own definition to break a problem into smaller subproblems.


# Example

- 📝 Example 1: Factorial of a Number (Classic Example)
- 💡 Factorial (n!) of a number n is the product of all integers from 1 to n.
# Mathematically:
# n!=n×(n−1)×(n−2)×...×1

# Using recursion:
function factorial(n) {
    if (n === 0) return 1;  // Base Case: 0! = 1
    return n * factorial(n - 1);  // Recursive Case
}

console.log(factorial(5));  // Output: 120
🔍 Explanation:

factorial(5) = 5 * factorial(4)
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1 * factorial(0)
factorial(0) = 1 (Base Case Stops Here)
