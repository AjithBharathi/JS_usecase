console.log('===== EVENT LOOP =====');

console.log('a');
setTimeout(() => console.log('set time out'));
Promise.resolve(() => console.log('promise')).then((res) => res());
console.log('b');
