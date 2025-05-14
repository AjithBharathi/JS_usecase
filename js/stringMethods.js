console.log('====STRING METHODS====');

// -------------------------------------------------------------------------

// REVERSE A STRING

function reverseString(val = 'ajith') {
  let res = val.split('').reverse().join('');
  return res;
}

console.log('reverse string - ', reverseString('bhara'));

// -------------------------------------------------------------------------

// PALINDROME

function checkPalindrome(val) {
  let res = val.split('').reverse().join('');
  return res === val;
}

console.log('palindrome check - ', checkPalindrome('AHA'));

// ************** checking palindrome *************
function onCheckingPalindrome() {
  let givenString = 'madam';
  let result = '';

  if (givenString[0] == givenString[givenString.length - 1]) {
    for (let i = 0; i < givenString.length; i++) {
      result = result + givenString[givenString.length - 1 - i];
    }
    if (result == givenString) {
      console.log('the given string is palindrome');
    } else {
      console.log('the given string is not palindrome');
    }
  } else {
    console.log('the given string is not palindrome');
  }
}
onCheckingPalindrome();
// -------------------------------------------------------------------------

// print a sentence in reverse order
let sentence = 'my name is ajith';
let afterSentenceRev = sentence.split(' ').reverse().join(' ');
console.log(
  'before sentence reverse: ',
  sentence,
  '/ after sentence reverse: ',
  afterSentenceRev
);

// -------------------------------------------------------------------------

// print a string in reverse order
let myString = 'ajith';
let afterMyStringRev = myString.split('').reverse().join('');
console.log(
  'before string reverse: ',
  myString,
  '/ after string reverse: ',
  afterMyStringRev
);

// -------------------------------------------------------------------------

// combine both - string and sentence revrse at a time
let stringSentence = 'my name is ajith';
let afterStringSentenceRev = stringSentence.split('').reverse().join('');
console.log(
  'before string sentence reverse: ',
  stringSentence,
  '/ after string sentence reverse: ',
  afterStringSentenceRev
);

// -------------------------------------------------------------------------
// ANAGRAMS

// An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

function checkAnagrams(x, y) {
  const res = (ip) =>
    ip
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .split('')
      .sort()
      .join('');

  return res(x) === res(y);
}

console.log(checkAnagrams('azs', 'zas'));
