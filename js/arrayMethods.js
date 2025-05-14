console.log('====ARRAY METHODS====');

// FIND LARGEST NUMBER

function findLargestNumber(val) {
  let res = val[0];
  for (let i = 1; i < val.length; i++) {
    if (res < val[i]) {
      res = val[i];
    }
  }
  return res;
}

console.log('largest number - ', findLargestNumber([100, 2, 30]));

// -------------------------------------------------------------------------

// FIND LARGEST NUMBER 2
function findLargestNumner2(val) {
  let res = Math.max(...val);
  return res;
}
console.log('find largest value 2 - ', findLargestNumner2([1, 2, 3, 4, 5, 6]));

// -------------------------------------------------------------------------

// ADD AN ARRAY USING REDUCE METHOD

function addArrayReduce(val) {
  let res = val.reduce((a, b) => a + b);
  return res;
}

console.log(
  'add an array using reduce method - ',
  addArrayReduce([1, 2, 3, 4])
);

// -------------------------------------------------------------------------

// ADD AN ARRAY WITHOUT REDUCE METHOD

function addArrayWithoutReduce(val) {
  let res = 0;
  for (let i = 0; i < val.length; i++) {
    res += val[i];
  }
  return res;
}

console.log(
  'add an array without reduce method - ',
  addArrayWithoutReduce([11, 2, 3, 4])
);

// -------------------------------------------------------------------------

// RECURSIVE TECHNIQUE
// WITH KEY NAME

let nesteddata = [
  {
    name: 'batman',
    collection: [
      { name: 'dark knight', collection: [{ name: 'joker' }] },
      { name: 'dark knight rises' },
    ],
  },
  {
    name: 'spiderman',
    collection: [{ name: 'home coming' }, { name: 'no way home' }],
  },
  { name: 'ironman' },
];

function nestedArrayIteration(ipData) {
  ipData.forEach((data) => {
    console.log(data.name);
    if (data.collection && Array.isArray(data.collection)) {
      nestedArrayIteration(data.collection);
    }
  });
}

nestedArrayIteration(nesteddata);

// WITHOUT KEY

// let nesteddata2 = [1, [2, [3, [4, 5]], 6], 7];
let nesteddata2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function nestedArrIterationWithoutKey(ipdata) {
  ipdata.forEach((data) => {
    if (Array.isArray(data)) {
      nestedArrIterationWithoutKey(data);
    } else {
      console.log(data);
    }
  });
}

nestedArrIterationWithoutKey(nesteddata2);

// -------------------------------------------------------------------------
