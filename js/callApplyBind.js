console.log('==== CALL(), APPLY(), BIND() ====');

// CALL
console.log('===CALL===');
function myCallFn(greetings) {
  console.log(`${greetings}, ${this.name}`);
}

myCallFn.call({ name: 'ajith' }, 'good morning');

///////////////////////////////////

function myFn2(greetings) {
  return `${greetings}, ${this.name}`;
}

const person = { name: 'ram' };

const myFn2Call = myFn2.call(person, 'hello');

// console.log(myFn2Call()); // Uncaught TypeError: myFn2Call is not a function

console.log(myFn2Call);

///////////////////////////////////

const person2 = {
  name: 'ajith bharathi',
  greetPerson(greet) {
    return `${greet}, I am ${this.name}`;
  },
};

const anotherPerson = { name: 'adhav' };

console.log(person2.greetPerson.call(anotherPerson, 'hello'));

///////////////////////////////////

// CALL, APPLY, BIND in one method

const personAll = {
  name: 'ajith bharathi',
  greetPerson(greet) {
    console.log(greet);
    return `${greet}, I am ${this.name}`;
  },
};

const anotherPersonAll = { name: 'adhav' };

console.log(personAll.greetPerson.call(anotherPersonAll, 'hello'));
console.log(personAll.greetPerson.apply(anotherPersonAll, ['Hii']));
console.log(personAll.greetPerson.bind(anotherPersonAll, 'Hey')());

/////////////////////////////

// APPLY

const appNum = [1, 2, 3, 4, 5];

console.log(Math.max(...appNum));
console.log(Math.max(appNum)); // NaN

// without help of spread operator
console.log(Math.max.apply(null, appNum));
console.log(Math.min.apply(null, appNum));

/////////////////////////////
// BIND

function fn() {
  console.log(this);
}

let = fnObj = {
  g: fn.bind(null), // when passing null to bind, the this will refers to the window object
};

fnObj.g();
// ----------------------
function fnB() {
  console.log(this.name);
}

fnB = fnB.bind({ name: 'ajith' }).bind({ name: 'bharathi' }); // "chain binding" will not work with bind() method

fnB();

// ----------------------

function checkPassword(success, fail) {
  let password = prompt('give password ? ', '');
  if (password == 'qq') success();
  else fail();
}

let newuser = {
  name: 'new user name',
  loginSuccess() {
    var name = 'xxx';
    console.log(`${name} - ${this.name} succesfully logged in!`);
  },

  loginFail() {
    console.log(`${this.name} failed logged in!`);
  },
};

// checkPassword(newuser.loginSuccess, newuser.loginFail); // this key word will not bind the newuser.name. because its depands on the place where its called

// we can sove this with bind mehtod

// checkPassword(
//   newuser.loginSuccess.bind(newuser),
//   newuser.loginFail.bind(newuser)
// );                // fixed via bind method
namexx = 'aaaaa';
const arrowObj = {
  namexx: 'ajith obj',
  myfn() {
    console.log('regular function', this.namexx);
  },
  myarrfn: () => {
    console.log('arrow function', this.namexx);
  },
};

arrowObj.myfn();
arrowObj.myarrfn();

arrowObj.myfn.call({ namexx: 'ajith call' });
arrowObj.myarrfn.call({ namexx: 'ajith call' });
