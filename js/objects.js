console.log('====OBJECTS====');

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20
multiply(value); // 20
multiply(value); // 40

////////////////////////////////////////////////////////////////

let chPerson = { name: 'ajith' };
const chPersonArr = [chPerson];
chPerson = null; // this will not change the array value
chPerson.name = 'bhara'; // this will the do the changes in the array
console.log(chPersonArr);

function changeAgeAndReference(person) {
  person.age = 30;
  person = {
    name: 'john',
    age: 40,
  };

  return person;
}

const personOne = { name: 'alex', age: 20 };

const personTwo = changeAgeAndReference(personOne);

console.log(personOne); // {name: 'alex', age: 30}
console.log(personTwo); // {name: 'john', age: 40}

// REASSIGNING THE OBJECT WON'T CHAGNE THE ORIGINAL OBJECT (IT WILL NOT PASS THE REFERENCE)

////////////////////////////////////////////////////////////////

// SHALLOW COPY AND DEEP COPY /  CLONE AN OBJECT

// SHALLOW COPY
let shaObj1 = { name: 'alex' };
let shaObj2 = shaObj1;

console.log(shaObj1, shaObj2);

// DEEP COPY /  CLONE AN OBJECT

let deepObj = { name: 'pandy' };

const deepObj1 = Object.assign({}, deepObj);
// const deepObj1 =  JSON.parse(JSON.stringify(deepObj1));
// const deepObj1 =  {...deepObj};

deepObj1.name = 'cheran';

console.log(deepObj, deepObj1);

////////////////////////////////////////////////////////////////

const obj2 = { a: 1, b: 2, a: 3 };
console.log(obj2); // {a:3, b: 2}

////////////////////////////////////////////////////////////////

const cAssign = {};
const cAssign2 = { key: 'b' };
const cAssign3 = { key: 'c' };

cAssign[cAssign2] = 123;
cAssign[cAssign3] = 456;

console.log(cAssign); // {[object Object]: 456}

////////////////////////////////////////////////////////////////

console.log([...'Ajith']); // ['A', 'j', 'i', 't', 'h']

////////////////////////////////////////////////////////////////

const user = { name: 'alex', age: 20 };
const admin = { admin: true, ...user };

console.log(admin); // { name: 'alex', age: 20, admin:true }

////////////////////////////////////////////////////////////////

const settings = {
  name: 'ajith',
  level: 19,
  health: 40,
};

const settingsData = JSON.stringify(settings, ['level', 'health']);
console.log(settingsData); // {"level":19,"health":40}

// IT ONLY STRINGIFY THE PROPERITES WHICH MENTIONED IN THE ARRAY IN THE FUNCTION

////////////////////////////////////////////////////////////////

const shape = {
  radius: 10,
  diameter: function () {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN

////////////////////////////////////////////////////////////////

// DESTRUCTURING
let deUser = {
  name: 'ajith',
  age: 29,
  fullName: {
    firstname: 'ajithbharathi',
    lastname: 'gunasekaran',
  },
};

const { name } = deUser;

console.log(name);

// renaming
const { name: myName } = deUser;

console.log(myName);

// nested object

const { fullName } = deUser;

// for further destructuring
const {
  fullName: { firstname },
} = deUser;

console.log(firstname);

// simply adding : is renaming but using : with {} is referred to as further destructuring

////////////////////////////////////////////////////////////////

// function getItems(fruitList, ...args, favFruit) { //Rest element must be last element.
//   return [...fruitList, ...args, favFruit]
// }

function getItems(fruitList, favFruit, ...args) {
  return [...fruitList, ...args, favFruit]; // spread operators can be ue in between
}

console.log(getItems(['banana', 'apple'], 'pear', 'orange'));

////////////////////////////////////////////////////////////////

console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false
