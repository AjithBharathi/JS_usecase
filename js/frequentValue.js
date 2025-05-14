console.log('====FIND FREQUENT VALUES====');

const colors = [
  'red',
  'blue',
  'green',
  'red',
  'green',
  'blue',
  'violet',
  'yellow',
  'blue',
  'red',
  'orange',
  'violet',
];

let obj = {};

for (let i = 0; i < colors.length; i++) {
  if (obj.hasOwnProperty(colors[i])) {
    obj[colors[i]] = obj[colors[i]] + 1;
  } else {
    obj[colors[i]] = 1;
  }
}
console.log(obj);

// -------------------------------------------------------------------------

// FIND FREQUENT ELEMENT OF AN ARRAY

function freqElement(val) {
  let res = {};
  for (let i = 0; i < val.length; i++) {
    if (res[val[i]]) {
      res[val[i]] += 1;
    } else {
      res[val[i]] = 1;
    }
  }
  let res2;
  for (let i in res) {
    if (!res2) {
    }
  }
  return res;
}

console.log('frequent elements - ', freqElement([1, 1, 2, 3, 4, 4, 4, 5, 5]));

// -------------------------------------------------------------------------
