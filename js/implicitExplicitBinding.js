console.log('==== IMPLICIT, EXPLICIT BINDING ====');

// Default Binding

function defaultBinding() {
  console.log(this);
}
// Output : window

('use strict');
function defaultBinding() {
  console.log(this);
}
// Output : undefined

/////////////////////////////////////

// Implicit binding

// Ex: 1;
var books = {
  title: 'First Book',
  printTitle: function () {
    console.log(this.title);
  },
};
books.printTitle();
// Output : First Book

//Nested Function Example
// Ex: 2;
var books = {
  title: 'First Book',
  printTitle: function () {
    console.log(this.title);
  },
  nestedBooks: {
    title: 'Second Book',
    printTitle: function () {
      console.log(this.title);
    },
  },
};
books.nestedBooks.printTitle();
//Output : Second Book

//Method Seperation Example
// Ex: 3;
var books = {
  title: 'First Book',
  printTitle: function () {
    console.log(this.title);
  },
  nestedBooks: {
    title: 'Second Book',
    printTitle: function () {
      console.log(this.title);
    },
  },
};

var otherBooks = {
  title: 'Third Book',
};
otherBooks.printTitle = books.printTitle;
otherBooks.printTitle();
//Output : Third Book

///////////////////

// Explicit binding

let printFullName = function (city, state) {
  console.log(
    this.firstName + ' ' + this.lastName + 'from' + city + ', ' + state
  );
};
const name = {
  firstName: 'Vikrant',
  lastName: 'Singh',
};
printFullName.call(name, 'Noida', 'UP');
//Output : Vikrant  Singh from Noida , UP

const name2 = {
  firstName: 'Sachin',
  lastName: 'Tendulkar',
};
printFullName.call(name2, 'Mumbai', 'Maharashtra');
