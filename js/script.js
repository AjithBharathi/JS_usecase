console.log('script works!');

// let a = [5,1,1,2,3,4,4]; let b = [2,3,1,6,7]

// console.log([...new Set(Sort(a.concat(b)))])

// console.log([...new Set(a.concat(b))].sort())

let arr1 = [1, 2, 6, 1, 5, 3, 8];
let arr2 = [4, 2, 6, 1, 5, 4, 9];

// concat - used to combine two array
let concatRes = arr1.concat(arr2);

console.log('concat result...', concatRes);

// remove duplicates  - Using the Set constructor and the spread syntax to remove the duplicates in a array.
let findDuplicateRes = [...new Set(concatRes)];

console.log('duplicate result...', findDuplicateRes);

// sort method - used to sort an array in ascending order
let sortRes = findDuplicateRes.sort();

console.log('sort from ascending result...', sortRes);

// sort method - used to sort an array in descending order
let sortRes2 = findDuplicateRes.sort().reverse();

console.log('sort from descending result...', sortRes2);

// sort method with parameters - used to sort any array in ascending order
let sortAsceRes = findDuplicateRes.sort((a, b) => a - b);

console.log('sort (with parameter) from ascending result...', sortAsceRes);

// sort method with parameters - used to sort any array in descending order
let sortDescRes = findDuplicateRes.sort((a, b) => b - a);

console.log('sort (parameter) from descending result...', sortDescRes);

// reverse method - used print an array in reverse order
let revRes = findDuplicateRes.reverse();

console.log('reverse result', revRes);

// includes method - return boolean result. if array holds the value it return true, otherwise it return false.
let hasRes = findDuplicateRes.includes(7);

console.log('has method res...', hasRes);

// find smallest value in an array - using ascending sort method to achieve it
let smallValRes = findDuplicateRes.sort((a, b) => a - b)[0];

console.log('find smallest value in array...', smallValRes);

// find largest value in an array - using descending sort method to achieve it
let largeValRes = findDuplicateRes.sort((a, b) => b - a)[0];

console.log('find largest value in array...', largeValRes);

// every() method - The every() method returns true if all elements in an array pass a test.
const ages = [32, 33, 12, 40];

let everyRes = ages.every((age) => age >= 18);

console.log('every method result...', everyRes);

// reduce() method - The every() method used to add all the values in an array
let reduceRes = findDuplicateRes.reduce((total, value) => total + value);

console.log('reduce method result...', reduceRes);

