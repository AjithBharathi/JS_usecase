document.getElementById('outest').addEventListener('click', function (e) {
    console.log('outest clicked');
    // e.preventDefault(); // Prevents the default action of the event (e.g., form submission, link navigation)
    // e.stopPropagation(); // Prevents the event from bubbling up to parent elements 
}, { capture: true });


document.getElementById('outer').addEventListener('click', function (e) {
    console.log('outer clicked');
    // e.preventDefault(); // Prevents the default action of the event (e.g., form submission, link navigation)
    // e.stopPropagation(); // Prevents the event from bubbling up to parent elements 
   
}, true);



document.getElementById('inner').addEventListener('click', function (e) {
    console.log('inner clicked');
    // e.preventDefault(); // Prevents the default action of the event (e.g., form submission, link navigation)
    // e.stopPropagation(); // Prevents the event from bubbling up to parent elements 
   
}, true);