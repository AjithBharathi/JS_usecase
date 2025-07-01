console.log('A');

setTimeout(() => {
  console.log('B');
  Promise.resolve().then(() => console.log('C'));
}, 0);

queueMicrotask(() => {
  console.log('D');
});

Promise.resolve().then(() => {
  console.log('E');
  queueMicrotask(() => {
    console.log('F');
  });
  return Promise.resolve();
}).then(() => {
  console.log('G');
});

console.log('J');




// 🔑 Execution order explained

// 👉 1️⃣ Synchronous code first (call stack)

// console.log('A');   → A
// console.log('J');   → J
// 👉 2️⃣ Microtasks (queueMicrotask + Promise then)

// queueMicrotask(() => console.log('D'))
// Promise.resolve().then(...)
// That .then prints E and queues queueMicrotask(() => console.log('F')) and Promise.resolve() for next .then
// Microtasks execute in order queued:

// D     (from queueMicrotask)
// E     (Promise.then)
// F     (queueMicrotask inside E)
// G     (next then after E return Promise.resolve())
// 👉 3️⃣ Macrotask (setTimeout)

// B     (setTimeout)
// C     (Promise.then inside B)
// ✅ Final output

// A
// J
// D
// E
// F
// G
// B
// C
// 🚀 Summary

// What	When
// console.log('A')	sync
// console.log('J')	sync
// console.log('D')	microtask (queued first)
// console.log('E')	microtask (Promise then)
// console.log('F')	microtask (queued inside E)
// console.log('G')	microtask (next then)
// console.log('B')	macrotask (setTimeout)
// console.log('C')	microtask inside macrotask
// 💡 Key learning:

// Microtasks (Promise, queueMicrotask) run before macrotasks (setTimeout).
// Microtasks queued during another microtask are added to the same microtask phase.
// If you'd like, I can show this as a visual task queue diagram — just let me know! 🚀