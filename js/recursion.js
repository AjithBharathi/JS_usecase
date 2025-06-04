console.log('====RECURSION====');

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
  if (typeof obj !== 'object' || obj === null) {
    console.log('base case - ', obj);
    return obj
  };

  let clone = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    clone[key] = deepClone(obj[key]); // 🔄 Recursive call
  }
  return clone;
}

const original = originalObject
const copied = deepClone(original);

// console.log(copied);


let person = [
  {
    name: 'name 0 1',
    person: [
      {
        name: "name 0 1 1",
        person: [
          {
            name: "ajith 0 1 1 1"
          },
          {
            name: "ajith 0 1 1 2"
          }
        ]
      },
      {
        name: "ajith 0 1 2"
      }
    ]
  },
  {
    name: 'name 0 2',
    person: {
      name: "ajith 2"
    }
  },
]
function rec(ip){
    for(let i=0;i<ip.length;i++){
        console.log('cc ',ip[i].name)
        if(ip[i].person && Array.isArray(ip[i].person)){
            rec(ip[i].person);
        }
    }
}

rec(person);