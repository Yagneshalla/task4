// functions without parameters

// 1. a function named `greet` that prints "Hello, World!" to the console.

function greet() {
    console.log('Hello,world!');
}
greet();

// functions with parameters

// 1.Write a function named `addNumbers` that takes two parameters, `a` and `b`.. 
//Inside the function, print the sum of `a` and `b`.
//Call the `addNumbers` function with different sets of numbers to demonstrate its functionality.

function addNumbers(a, b) {
    sum = a + b;
    console.log(sum)
}
addNumbers(10, 20);
addNumbers(150, 250);
addNumbers(1111, 333);
addNumbers(8247, 3339);

//Functions with Return Statements

//1. Write a function named `multiply` that takes two parameters, `x` and `y`.
// Inside the function, return the product of `x` and `y`.
// Store the returned value in a variable and print it to the console to ensure the functionworks as expected.    

function multiply(x, y) {

    return x * y;
}
var product = multiply(5, 6);
console.log(product)


//Combining Functions

// Write a function named `calculateRectangleArea` that takes two parameters, `length`and `width`.
//Inside the function, use the `multiply` function from the previous task to calculate the area of the rectangle and return the result.
//Call the `calculateRectangleArea` function and print the result to the console.

function caluculaterecctanglearea(length, width) {
    return multiply(length, width)
}
let result = caluculaterecctanglearea(10, 15);
console.log(result);

//default parameters

//Write a function named `greetUser` that takes one parameter, `name`, with a default value of "Guest".
//Inside the function, print a message saying "Hello, [name]!".
//Call the `greetUser` function with and without passing an argument to demonstrate the default parameter functionality. 

function greetuser(name = "guest") {
    console.log('hello, ${name}');
}
greetuser("yagnesh");
greetuser();
console.log()