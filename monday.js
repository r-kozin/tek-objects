// // // // Create a Promise that resolves after one second.
// // // const myPromise = new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //         resolve("Guess this worked!");
// // //     }, 1000);
// // // });

// // // // Add some then() methods to handle additional tasks.
// // // myPromise
// // //     .then((x) => x + ' Again?')
// // //     .then((x) => x + ' Third time!')
// // //     .then((x) => x + ' Promises are cool.')
// // //     .catch((err) => {
// // //         console.error(err);
// // //     })

// // new Promise((resolve, reject) => {
// //     console.log("Initial");
  
// //     resolve();
// //   })
// //     .then(() => {
// //       throw new Error("Something failed");
  
// //       console.log("Do this");
// //     })
// //     .catch(() => {
// //       console.error("Do that");
// //     })
// //     .then(() => {
// //       console.log("Do this, no matter what happened before");
// //     });

// // const promise1 = Promise.reject(0);
// // const promise2 = new Promise((resolve) => setTimeout(resolve, 600, 'quick'));
// // const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// // const promises = [promise1, promise2, promise3];

// // Promise.any(promises).then((value) => console.log(value));

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   });
//   // Expected output: "two"

// console.log("One");

// setTimeout(() => console.log("Two"), 0);

// console.log("Three");

// Promise.resolve().then(() => console.log(2));
// console.log(1);

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(0).then(() => console.log("Cat"));

// Promise.resolve()
//   .then(() => console.log("Dog"))
//   .then(() => console.log("Cow"));

// console.log("Bird");

const thenable = {
    then: function(onFulfilled) {
        setTimeout(() => onFulfilled("Hey"), 100);
    }
};

const p = Promise.resolve(thenable);
console.log(p instanceof Promise); // true

Promise.resolve()
    .then(() => thenable)
    .then(val => console.log(val)); // Hey