console.log('Hello!');

const originalObject = {
  name: 'Alice',
  age: 30,
  address: {
    street: '123 main st',
    city: 'anytown',
  },
  companies: {
    first: {
      name: 'keeppler',
      city: 'anytown',
      designation: ['developer', 'manager', 'architect'],
    },
    second: {
      name: 'keppler',
      city: 'anytown',
    },
  },
  numbers: [1, 2, 3],
};

console.log(originalObject)

function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;

  let clone = Array.isArray(obj) ? [] : {};
  console.log(clone)
  for (const key in obj) {
    // console.log(key)
    clone[key] = deepClone(obj[key]); // 🔄 Recursive call
  }
  console.log(clone)
  return clone;
}

const original = originalObject
const copied = deepClone(original);

// console.log(copied);


