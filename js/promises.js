console.log('==== PROMISE ====');



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("promise1 resolved");
        reject("promise1 rejected");
    }, 4000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2 resolved");
        reject("promise2 rejected");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise3 resolved");
        // reject("promise3 rejected");
    }, 10000);
});


function myFunction() {
    var int = 0
    let intfn = setInterval(() => {
        int++;
        console.log(int);
    }, 1000);

    
    Promise.race([promise1, promise2, promise3]).then((value) => {
        console.log('success -', value);
    }, (error) => {
        console.log('failure -', error);
    }
    ).finally(() => {
        console.log('finally');
        clearInterval(intfn);
    });
}

myFunction();