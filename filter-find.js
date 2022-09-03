// Filter -----> Filter the array keeps only needed items

// Condition(false/true) is the important thing all filter, find....

const arr = [2, 3, 4, 5, 6, 7];


// Create a new array with only odd numbers 
// Output: [3,5,7]

// Normal
// const resArr = [];
// arr.forEach((num) => {
//   if (num % 2 === 1) {
//     // insert an element into the array
//     resArr.push(num);
//   }
// });
// console.log(resArr);

// Following both are same statement in different way
// console.log(arr.filter((num) => num % 2 === 1));// direct return 

// console.log(arr.filter((num) => {
//   return num % 2 === 1;
// })); // with return keyword

// const students = [
//   { name: 'Sanjay', marks: 500 },
//   { name: 'Sam', marks: 550 },
//   { name: 'Saravanan', marks: 500 },
//   { name: 'Danny', marks: 450 }
// ];

// Create a new of students whose marks is greater than 400
// Output:
/**
 * OUPUT
 * [
 *  { name: 'Sanjay', marks: 500 },
 *  { name: 'Sam', marks: 550 },
 * ]
 */


// console.log(students.filter(({ marks }) => marks > 400));


// Create a new of students whose marks is less or equal to 400
// Output:
/**
 * OUPUT
 * [
 *  { name: 'Saravanan', marks: 400 },
 *  { name: 'Danny', marks: 350 },
 * ]
 */

// Filter Return type --> array of elements which matches condition

// console.log(students.filter(({ marks }) => marks <= 400));



// Find --> used to find single element of the array
// element of an array / undefined

const students = [
  { name: 'Danny', marks: 450 },
  { name: 'Sanjay', marks: 500 },
  { name: 'Sam', marks: 550 },
  { name: 'Saravanan', marks: 500 },
  { name: 'Danny', marks: 1000 },
];


// print the student who has the name danny
// Output: {name: 'Danny', marks: 450}

// find


// Normal flow
// for (var student of students) {
//   if (student.name === 'Danny') {
//     console.log(student);
//     break;
//   }
// }

// find ---> return the array first array element which matches the condition
// console.log(students.find(({ name }) => name === 'Danny'));


// // find ---> returns undefined when no elements matches the condition
// console.log(students.find(({ name }) => name === 'Sammy'));


// // findLast ---> return the array last array element which matches the condition
// console.log(students.findLast(({ name }) => name === 'Danny'));


// // findLast ---> returns undefined when no elements matches the condition
// console.log(students.findLast(({ name }) => name === 'Sammy'));

// findIndex ---> return the array first index of the  array element which matches the condition
// console.log(students.findIndex(({ name }) => name === 'Danny'));


// // findIndex ---> returns -1 when no elements matches the condition
// console.log(students.findIndex(({ name }) => name === 'Sammy'));

// findLastIndex ---> return the array last index of the  array element which matches the condition
console.log(students.findLastIndex(({ name }) => name === 'Danny'));


// // findLastIndex ---> returns -1 when no elements matches the condition
console.log(students.findLastIndex(({ name }) => name === 'Sammy'));




