// Standard format for a promise 
// var promise = new Promise(function(resolve, reject) {
//   // do a thing, possibly async, then…

//   if (/* everything turned out fine */ ) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });


'use strict';
// If the promise works 
// promise.then(function(result) {
//     console.log("Promise worked");
//   }, function(err) {
//     console.log("Something broke");
//   });



//Following, an example to demonstrate the asynchronicity of the then method.
const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then((value)=>{
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    return value;
});
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
// setTimeout(()=>{
//     console.log(thenProm);
// }, 3000);

console.log("End of the code");