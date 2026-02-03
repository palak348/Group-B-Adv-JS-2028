'use strict'


// Browser Strict

// console.log
// function
// objects method
// function inside  method

// console.log(this)

// function

// function test(){
//      console.log(this)
// }

// test()

let obj = {
    name: "Adam",
    age: 27,
    greet: function () {
      console.log(this);
    },
  };

  obj.greet()
  
//   let obj2 = {
//     name: "Adam",
//     age: 27,
//     greet: function () {
//        function sayHi() {
//         console.log(this);
//       };
//       sayHi()
//     },
//   };
  
//   obj2.greet();