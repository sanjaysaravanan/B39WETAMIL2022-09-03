// function keyword Definition 
function SampleOne() {
  console.log("Hello World");
}

console.log(SampleOne)
// // Calling / Invoking
// SampleOne();

// anonymous function expression definition
// Left      Right
var Sample = function () {
  console.log('Hello World');
}
// anonymous arrow function expression assignment
var SampleThree = () => {
  console.log('Hello World');
}
console.log(Sample)
// Calling / Invoking
Sample();

// Definition + Invoking
// Immediately Invoked Function Expression

// console.log(function () {
//   console.log("Anonymous IIFE Function saying Hello World");
// });

(function () {
  console.log("Hello I am IIFE Function execution");
})();

function Sum(a, b) {
  console.log("Sum is", a + b);
}

Sum(10, 50);

// Parameterised IIFE
(function (a, b) {
  console.log("IIFE Function execution Sum is", a + b);
})(10, 80);

//                    Callback function
function doOperation(operation) {
  // where operation is a function passed as an argument
  operation(10, 100);
}

doOperation(Sum);

