(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a); 
  })(1);
})(0);



// 🔑 What happens?

// 👉 immediateA is an immediately invoked function expression (IIFE), called with 0:

// immediateA(0);
// a = 0
// 👉 Inside immediateA, another IIFE immediateB is called with 1:

// immediateB(1);
// b = 1 (but it isn’t used)
// 👉 Inside immediateB, it logs:

// console.log(a);
// Since a is available via closure:

// console.log(0);
// ✅ Final output

// 0
// ⚡ Summary

// immediateA runs with a = 0
// Inside immediateA, immediateB runs with b = 1
// immediateB logs a, which is 0
// Output: 0
// 💡 Closure in action!
// immediateB has access to a because it’s in the scope chain (enclosed by immediateA).

// If you'd like, I can show how to modify it to log both a and b, or how the closure works internally! 🚀





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// ✅ Great! You want to keep var, but still log 0, 1, 2 at the right time.

// 👉 The trick is to capture i's value at each loop iteration — you can do this using:

// an IIFE (Immediately Invoked Function Expression)
// 📝 Solution with IIFE

for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i);
}

// ⚡ How it works

// The IIFE is called with the current i value
// Inside the IIFE, j is a new local variable (unique per loop)
// setTimeout closes over j, not over the shared i
// ✅ Output after ~1000ms:

// 0
// 1
// 2
// 🚀 Summary

// 👉 var is function-scoped — so you need to capture i's value for each iteration
// 👉 The IIFE gives each timer its own copy of i




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////