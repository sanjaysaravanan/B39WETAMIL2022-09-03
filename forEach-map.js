// For Each
const arr = [5, 4, 3, 2, 1];

// Print all the squares of each element in the Array
/**
 * 25
 * 16
 * .
 * .
 * 1
 */

// Normal Flow
// for (var num of arr) {
//   console.log(num * num);
// }

// function squareNum(num) {
//   console.log(num * num);
// }

// const squareNum = (num) => {
//   console.log(num * num);
// }

// forEach
// arr.forEach(squareNum);

// arr.forEach(function (num) {
//   console.log(num * num);
// });

// arr.forEach((num) => {
//   console.log(num * num);
// });


// Print all the squares of each element in the Array
/**
 * 25 0
 * 16 1
 * 9 2
 * 4 3
 * 1 4
 */


// console.log(arr.forEach((arrElement, i) => {
//   console.log(arrElement * arrElement, i);
// }));
// forEach iterates through each and executes the callback function
// Return Type forEach execution ---> undefined

const students = [
  { name: 'Sanjay', marks: 500 },
  { name: 'Sam', marks: 550 },
  { name: 'Saravanan', marks: 400 },
  { name: 'Danny', marks: 350 }
];

// Print the Output in the following format
/**
 * 1. Sanjay scored 500
 * 2. Sam scored 550
 * 3. Saravanan scored 400
 * 4. Danny scored 350
 */
// // without destructure
// students.forEach((student, i) => {
//   console.log(`${i + 1}. ${student.name} scored ${student.marks}`);
// });

// // with destructure
// students.forEach(({ name, marks }, i) => {
//   console.log(`${i + 1}. ${name} scored ${marks}`);
// });


// MAP
const arrTwo = [5, 4, 3, 2, 1];

// Create new array which contains double of each of each element
// Output: [10, 8, 6, 4, 2]

// Normal without Map
var resultArr = [];

arrTwo.forEach((num, i) => {
  resultArr[i] = num * 2;
});

// console.log(resultArr);


// Map is specially used to create new array whose values are the manipulated values from parent array
// Return Type Map ----> new array of same length with manipulated values
var resArr = arrTwo.map((num) => {
  return num * 2;
});

console.log(resArr);

const studentMarks = [
  { name: 'Sanjay', markOne: 100, markTwo: 99 },
  { name: 'Sam', markOne: 89, markTwo: 79 },
  { name: 'Saravanan', markOne: 90, markTwo: 97 },
  { name: 'Danny', markOne: 45, markTwo: 90 }
];

// Create a new array whose object contain name and total marks
/**
 * OUPUT
 * [
 *  { name: 'Sanjay', total: 199 },
 *  { name: 'Sam', total: 168 },
 *  { name: 'Saravanan', total: 187 },
 *  { name: 'Danny', total: 135 },
 * ]
 */


var totalMarkArr = studentMarks.map(({ name, markOne, markTwo }) => {
  // Operations
  return { name, total: markOne + markTwo };
});
console.log(totalMarkArr);

