console.log('===== DEBOUNCING AND TROTTLING =====');

console.log('DEBOUNCING');

document.getElementById('debouncing').addEventListener('input', function (e) {
  let timer;
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log(e.target.value);
  }, 1000);
});
