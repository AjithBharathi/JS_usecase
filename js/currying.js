console.log('===== CURRYING =====');

function add(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function () {
          return a + b + c + d;
        };
      };
    };
  };
}

console.log(add(5)(2)(4)(5)());

// infinit currying
function add2(a) {
  return function (b) {
    if (b) {
      return add2(a + b);
    }
    return a;
  };
}

console.log(add2(5)(2)(4)(5)());

///////////////////////////////////////////////////////////////////////////

// USING BIND METHOD

let multiply1 = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo1 = multiply.bind(this, 2);
multiplyByTwo1(3);

///////////////////////////////////////////////////////////////////////////

// USING CLOSURE

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByTwo(3);

///////////////////////////////////////////////////////////////////////////
