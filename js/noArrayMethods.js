console.log('====NO ARRAY METHODS====');

let numbers = [8, 1, 2, 6, 10, 3, 8, 4, 1, 4, 3, 6, 8];
let chars = ['A', 'B', 'A', 'C', 'B'];

console.log('original numbers ', numbers);
console.log('original chars ', chars);

// ***** CALLING METHODS *****

// onRemoveDuplicateArrayUsingIndex();
// onRemoveDuplicateArrayUsingSpliceWithSort();
// onRemoveDuplicateArrayUsingSpliceWithOutSort();

// onFindDuplicateArrayUsingIndex();

onFindLargestNumber();
onFindSecondLargestNumber();


// ***** RUNNING METHODS *****

// ************** remove duplicates **************

// duplicate removed array
// *** using index ***
function onRemoveDuplicateArrayUsingIndex() {
  let originalArray = [...numbers];
  let resultArray = [];

  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray.indexOf(originalArray[i]) === i) {
      resultArray.push(originalArray[i]);
    }
  }

  console.log('duplicate removed array using index', resultArray);
}

// *** using splice with sort ***
function onRemoveDuplicateArrayUsingSpliceWithSort() {
  let originalArray = [...numbers];

  originalArray.sort((a, b) => a - b);

  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] == originalArray[i + 1]) {
      // console.log(arr[i+1])
      originalArray.splice(i + 1, 1);
    }
  }

  console.log('duplicate removed array using splice with sort', originalArray);
}

// *** using splice without sort ***
// function onRemoveDuplicateArrayUsingSpliceWithOutSort() {
//   let originalArray = [...numbers];

//   for (let i = 0; i < originalArray.length; i++) {
//     if (i < originalArray.length - 1) {
//       for (let j = 1; j < originalArray.length; j++) {
//         if (originalArray[i] == originalArray[j]) {
//           originalArray.splice(i, 1);
//         }
//       }
//     }
//   }

//   console.log(
//     'duplicate removed array using splice without sort',
//     originalArray
//   );
// }

// duplicate find array (using index)
function onFindDuplicateArrayUsingIndex() {
  let originalArray = [...numbers];
  let resultArray = [];

  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray.indexOf(originalArray[i]) !== i) {
      resultArray.push({
        index: i,
        value: originalArray[i],
      });
    }
  }

  console.log('duplicate find array', resultArray);
}

// ************** find largest number **************
function onFindLargestNumber() {
  let originalArray = [...numbers];
  let resultArray = [];
  let resultValue = originalArray[0];

  for (let i = 0; i < originalArray.length; i++) {
    if (i > 0 && resultValue < originalArray[i]) {
      resultValue = originalArray[i];
    }
  }

  console.log('largest value ', resultValue);
}

// ************** find second largest number **************
function onFindSecondLargestNumber() {
  let originalArray = [...numbers];
  let resultArray = [];
  let resultValue = originalArray[0];

  for (let i = 0; i < originalArray.length; i++) {
    let largestValue = originalArray[0];

    // finding first largest value
    for (let j = 0; j < originalArray.length; j++) {
      if (j > 0 && largestValue < originalArray[j]) {
        largestValue = originalArray[j];
      }
    }

    // finding second largest value
    if (resultValue < originalArray[i] && largestValue > originalArray[i]) {
      resultValue = originalArray[i];
    }
  }

  console.log('second largest value ', resultValue);
}

