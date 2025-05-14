console.log('===== CLOSURE =====');

// ADVANTAGES OF CLOSURE:
// memoize and once
// Data hiding and encapsulation

// Disadvantages of clousre:
// Garbage collection won’t occur,
// Will leads to memory leaks

function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    // let a = 10;
    return inner;
  }
  let a = 30;
  return outer;
}
let a = 100;

var close = outest()('outer args');
close();

// --------------------------------

function counter() {
  var count = 0; // its a private variable, cant able to use outside of the function without the return function
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}
var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2();

// this not a scalable function? why ? what is the meaning of scalable?
// --------------------------------

// constructor functions for more scalable code
function counterX() {
  var count = 0;
  this.incrementCounter = function () {
    // how this.incrementCounter is created as constructor?
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counterC = new counterX();

counterC.incrementCounter();
counterC.incrementCounter();
counterC.decrementCounter();

// ------------------

function counterXX() {
  count = 0; // count variable is local variable/scope of the counterXX function. can't able to acccess outside of the function directly.
  return function () {
    count++;
    return count;
  };
}

let xxResult = counterXX();
console.log('xx ', xxResult());
console.log('xx ', xxResult());
console.log('xx ', xxResult());
console.log('xx ', xxResult());
console.log('xx ', xxResult());
