const elements = ['Fire', "Air", "Water"];


// check whether Air is inside the array
// includes
console.log(elements.includes('Air')); // true when Item is present

console.log(elements.includes('Earth')); // false when Item is not present

console.log(elements.indexOf('Water')); // returns index of an element

console.log(elements.indexOf('Earth')); // returns -1 if there is no such item


console.log(elements)
const newLength = elements.push('Earth'); // inserts an element at the end of the array
console.log('newLength', newLength)
console.log(elements);

elements.push('Sky');

console.log(elements);

elements.pop();

// elements.splice(4);

console.log(elements);


elements.reverse(); // reverse the array elements

console.log(elements);


console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

console.log(elements.join('*'));
// Output: Fire*Air*Water

const arr = [1, 2, 3, 4, 5, 6];
//console.log(arr.join("--"));
// Output ---> "1--2--3--4--5--6"

const arr1 = [1, 2, [3, 7, 9], {}, 4, 5, 6];
console.log(arr1.join("---"));

const obj = {};
console.log(obj.toString());
