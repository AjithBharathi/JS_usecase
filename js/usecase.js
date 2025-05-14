console.log('====USE CASES====');

// STRING METHODS
// 1. reverse a string with and without using reverse() method
// 2. palindrome
// 3. two strings are anagrams of each other  or not
// 4. count the occurrences of each character in the string
// 5. anagrams

// NUMBERS
// 1. find factorial
// 2. prime value or not
// 3. fibobacci sequence

// ARRAY METHODS
// 1. reverse an array
// 2. combine two or more array into a single array
// 3. sort an array (asc, desc)
// 4. find largest or maximum number of an array
// 5. find 2nd largest number of an array
// 6. find smallest number of an array
// 7. find a value in an array
// 8. remove duplicates in an array
// 9. find duplicates in an array
// 10. sum all items in an array
// 11. item exist or not in an array
// 12. find index of an item in an array
// 13. every item in an array should meet the condition
// 14. replace an item in an array
// 15. remove an item in an array
// 16. find even or odd numbers of an array
// 17. find largest value in a nested array
// 18. flattens a nested array in JavaScript
// 19. find average value of an array
// 20. iterate unknown number of nested array (recursion)

// -------------------------------------------------------------------------

// // console.log('ajith')
// // setTimeout(() => {
// //     for (let i = 0; i < 200; i++) {
// //         console.log(i);
// //     }
// // },4000)

// // console.log('last')

// const obj1 = { a: 5, b: 10, c: 15 }
// const obj2 = { b: 5, c: 10, d: 20 }
// const obj3 = { b: 5, c: 10, d: 20 }

// result = { a: 5, b: 15, c: 25, d: 20 }
// // console.log({...obj1, ...obj2})

// for(let i in obj3) {
//     // console.log(obj1.hasOwnProperty(i))
//     if(obj1.hasOwnProperty(i)){
//         console.log()
//     }
// }

// function testVar() {
//     // console.log(a); // 1
//     let a = 10;
//     if (true) {
//         let a = 20;
//         console.log(a); // 2
//     }
//     console.log(a); // 3
// }

// testVar();

// -------------------------------------------------------------------------

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert( this.name );
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// -------------------------------------------------------------------------

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(undefined == undefined); // true
console.log(undefined === undefined); // true

console.log(typeof null); // object
console.log(typeof undefined); // undefined
