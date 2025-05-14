console.log('====VARIABLES====');

// var _a = 'ajith';
// let _b = 'bharathi';

// function namefn() {
//   let _c = 'raja';
//   var _d = 'ram';
//   console.log('inner', _a, _b, _c, _d);
// }

// namefn();

// console.log('outer ', _a, _b, _d);

//////////////////////////////////////////////////

// VAR

// its function scoped variable

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 3 3 3
}

console.log(varA); // undefined -  var is hoisted and initialized as undefined
var varA = 10;

var varB = 10;
var varC = 10;
function myVarFn() {
  var varB = 20;
  varC = 20;
  console.log(varB, varC); // 20 20
}
myVarFn();
console.log(varB, varC); // 10 20

var varD = 30;
var x = 20;
for (var x = 0; x < 2; x++) {
  var varD = 40;
}

console.log(varD, x); // 40 2

function myVarFn2() {
  var varA = 100;
  console.log(varA); // 100

  function myVarfn3() {
    var varA = 200;
    console.log(varA);
  }

  myVarfn3();
}

myVarFn2();
console.log(varA); // 10

//////////////////////////////////////////////////

// LET

// its block level scoped variable

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0 1 2
}

console.log(letA); // reference error - let is hoisted but not initialized (temporal dead zone), so accessing it before declaration throws an error.
let letA = 10;
