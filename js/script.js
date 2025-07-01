console.log('A');

setTimeout(() => console.log('B'), 0);        // macrotask
Promise.resolve().then(() => console.log('C')); // microtask
queueMicrotask(() => console.log('D'));         // microtask

console.log('E');
