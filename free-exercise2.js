// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number

let number = 3;

if (number % 2 === 0) {
console.log(`${number} is even number!`);

} else {
console.log(`${number} is odd number!`);

}


// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number

let randomNum = 15;
let primeChecker;

if (randomNum <1) {
    console.log("This is not prime number");
} else if (randomNum === 1 || randomNum === 2 ) {
    console.log("This is prime number")
} else {
    for (let i = 2; i < randomNum/ 2; i++) {
        if (randomNum % i === 0) {
            primeChecker = false
            break
        }
    }
    if (primeChecker === true) {
        console.log("This is prime number");
    } else {
        console.log("This is not prime number");
    }
}
    

/*
// Old Version
let randomNum = 15

if (randomNum < 1) {
    console.log("This number is not prime");

} else if (randomNum === 1 || randomNum === 2) {
    console.log("This is prime number")

} else if (randomNum > 1) {
    for (let i = 2; i < randomNum; i++) {
        if (randomNum % i === 0) {
            console.log("This is not prime number");
            
        } else {
            console.log("This is prime number")
            
        }
    }
    
} 
*/


// Write a code to find the sum of the numbers 1 to N
// Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 6

let totalSum = 0
let checkNum = 5

for (let i = 1; i <= checkNum; i++) {
    totalSum = totalSum + i //totalSum += i
}
console.log(totalSum);

// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

let totalMultiply = 1
let numFac = 6

for (i = numFac; i >= 1; i--) {
    totalMultiply = totalMultiply * i
}

console.log(totalMultiply)

// Write a code to print the first N fibonacci numbers
// Example: 15 → 610
//Fibonacci Number Generator

let numFib = 15
let a = 1
let b = 1
let c;

for (i = 3; i <= numFib; i++ ) {
    c = a + b
    a = b
    b = c

    console.log(a)
}

console.log(c)
jkasxccas