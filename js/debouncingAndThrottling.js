// console.log('===== DEBOUNCING AND TROTTLING =====');

// console.log('DEBOUNCING');

// document.getElementById('debouncing').addEventListener('input', function (e) {
//   let timer;
//   clearTimeout(timer);
//   timer = setTimeout(() => {
//     console.log(e.target.value);
//   }, 1000);
// });


// console.log('THROTTLING');
// let count = 0;
// document.getElementById('throttling').addEventListener('click', function (e) {
//   count++;
//   if (count === 1) {
//     console.log('Button clicked');
//     setTimeout(() => {
//       count = 0;
//     }, 2000);
//   } else {
//     console.log('Button click ignored');
//   }
// }
// );  

// /**
//  * Debounce utility function
//  * Calls the function after wait ms have elapsed since the last call
//  */
// function debounce(fn, wait) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(this, args), wait);
//   };
// }

// /**
//  * Throttle utility function
//  * Calls the function at most once every limit ms
//  */
// function throttle(fn, limit) {
//   let inThrottle;
//   return function (...args) {
//     if (!inThrottle) {
//       fn.apply(this, args);
//       inThrottle = true;
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// }

// // Example usage:
// const debouncedLog = debounce((val) => console.log('Debounced:', val), 1000);
// document.getElementById('debouncing').addEventListener('input', function (e) {
//   debouncedLog(e.target.value);
// });

// const throttledLog = throttle(() => console.log('Throttled button clicked'), 2000);
// document.getElementById('throttling').addEventListener('click', throttledLog);


function throttleFn(fn, timer) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if(now - last >= timer){
      last = now;
      return fn.apply(this, args)
    }
  }
}

function throttleEffect(event)
{
  console.log('im throttle result', event.target.value);
}

const throttledEffect = throttleFn(throttleEffect, 2000);
document.getElementById('throttling').addEventListener('input', throttledEffect);




