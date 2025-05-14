console.log('====CALLBACK METHODS====');

// WRITE A CALL BACK FUNCTION

function callCallBack(name, callBack) {
  callBack(`Hello ${name}`);
}

callCallBack('ajith', (message) => console.log(message));

// -------------------------------------------------------------------------



function callBack(name) {
  console.log('my name is', name);
}

function myFunction(name, name2, callback) {
  callback(name + ' ' + name2);
}

myFunction('ajith', 'bharathi', (name) => {
  console.log('name is',name);
});


setTimeout(()=>{

},1000)