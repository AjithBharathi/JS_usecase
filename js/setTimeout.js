console.log('====SET TIMEOUT====');

for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i); // What do you expect? print 6 on 5 times in every one second.
  }, i * 1000);
}

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i); // What do you expect? 1,2,3,4,5 - i is block scope, it creates new i on every iteration
//   }, i * 1000);
// }

// for (var i = 1; i <= 5; i++) {
//   function close(i) {
//     setTimeout(() => {
//       console.log(i); // What do you expect? 1,2,3,4,5,6 - without let and with the help of clousre
//     }, i * 1000);
//   }
//   close(i);
// }
