// String Manipulation Functions

// 1. Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
console.log(reverseString("hello")); // "olleh"

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}

// Example usage:
console.log(countCharacters("hello")); // 5

// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Example usage:
console.log(capitalizeWords("hello world")); // "Hello World"

// Array Functions

// 4. Find Maximum Value
function findMax(arr) {
  return Math.max(...arr);
}

// Example usage:
console.log(findMax([1, 2, 3, 4, 5])); // 5

// 5. Find Minimum Value
function findMin(arr) {
  return Math.min(...arr);
}

// Example usage:
console.log(findMin([1, 2, 3, 4, 5])); // 1

// 6. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Example usage:
console.log(sumArray([1, 2, 3, 4])); // 10

// 7. Filter Array
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Example usage:
console.log(filterArray([1, 2, 3, 4], (num) => num > 2)); // [3, 4]

// Mathematical Functions

// 8. Factorial
function factorial(n) {
  if (n < 0) return undefined; // Factorial for negative numbers is not defined
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
console.log(factorial(5)); // 120

// 9. Prime Number Check
function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage:
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// 10. Fibonacci Sequence
function fibonacci(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) sequence.push(0);
    else if (i === 1) sequence.push(1);
    else sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Example usage:
console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]
