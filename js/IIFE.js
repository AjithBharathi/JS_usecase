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


