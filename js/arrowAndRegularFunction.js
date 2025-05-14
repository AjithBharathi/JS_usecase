console.log('==== Arrow vs Regular function ====');

// Arrow functions are not having constructor. So we can’t use “new” keyword in arrow functions .

function myfunction() {
  return this;
}

const myobj1 = myfunction(); // - calls global obj
const myobj2 = new myfunction(); // calls in the particular function

console.log(myobj1, myobj2);

// ----------------

// function myCar() {
//   this.fuel = 0;

//   this.reFuel = function() {
//     setTimeout(function(){
//       this.fuel += 100;
//       console.log("fule refilled ", this.fuel);
//     }, 1000);
//   }
// }

// const honda = new myCar();
// honda.reFuel();

// -------------------

// function myCar() {
//   this.fuel = 0;

//   this.reFuel = function () {
//     const _this = this;
//     setTimeout(function () {
//       _this.fuel += 100;
//       console.log('fule refilled ', _this.fuel);
//     }, 1000);
//   };
// }

// const honda = new myCar();
// honda.reFuel();

// -------------------

// achieve via arrow function

function myCar() {
  this.fuel = 0;

  this.reFuel = function () {
    setTimeout(() => {
      this.fuel += 100;
      console.log('fule refilled ', this.fuel);
    }, 1000);
  };
}

const honda = new myCar();
honda.reFuel();

// -------------------

function myfun() {
  return this;
}

const call = myfun();
const call2 = myfun();
call.a = 'aj';
call2.a = 'ajith';
console.log(call.a);
console.log(call2.a); // both call and call2 pointing to the global object. so the assignment of call2.a will replace call.a aswell. if we want to avoid this, we should use new keyword

//-------------------

// WITH NEW KEYWORD

function myfunwithnew() {
  return this;
}

const newcall = new myfunwithnew();
const newcall2 = new myfunwithnew();
newcall.a = 'aj';
newcall2.a = 'ajith';
console.log(newcall.a);
console.log(newcall2.a);
