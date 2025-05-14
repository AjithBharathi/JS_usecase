console.log('====THIS KEYWORD====');
name = 'global name';
const person = {
  name: 'John',
  speak: function () {
    setTimeout(function () {
      console.log('...', this.name); // nothing will print
    }, 1000);
  },
};

person.speak();

const person2 = {
  name: 'John',
  speak: function () {
    setTimeout(() => {
      console.log(this.name); // printed john
    }, 1000);
  },
};

person2.speak();

const person3 = {
  name: 'John',
  child: {
    name: 'junior john',
    speak: function() {
      setTimeout(function() {
        console.log(this.name, name);
      }, 1000);
    },
  },
};

person3.child.speak();
