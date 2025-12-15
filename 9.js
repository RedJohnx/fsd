// A. Sum function
const sum = function(a, b) {
    return a + b;
};

// B. Check Even/Odd
const checkEvenOdd = function(num) {
    return num % 2 === 0 ? "Even" : "Odd";
};

// C. Display results
const resultSum = sum(5, 10);
const resultCheck = checkEvenOdd(resultSum);

console.log(`Sum: ${resultSum}`);
console.log(`The sum is ${resultCheck}`);
// In browser: document.write(...)