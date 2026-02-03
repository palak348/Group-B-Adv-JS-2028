// 'use strict'

// Node.js Strict

// console.log
// function
// objects method
// function inside  method

//  console.log(this)

// function

// let obj = {
//     name: "Adam",
//     age: 27,
//     greet: function () {
//       console.log(this);
//     },
//   };

//   obj.greet()

// //   // let obj2 = {
// //   //   name: "Adam",
// //   //   age: 27,
// //   //   greet: function () {
// //   //      function sayHi() {
// //   //       console.log(this);
// //   //     };
// //   //     sayHi()
// //   //   },
// //   // };

// //   // obj2.greet();

// function test() {
//   console.log(this);
// }
// test();

// // Arrow function

// let test2 = () => {
//   console.log(this);
// };

// test2();

// why there is this difference?



let obj = {
    name: "Adam",
    age: 27,
    greet: function () {
      console.log(this);
    },
  };

  obj.greet() // 1

let obj4 = {
  name: "Adam",

  sayHello: () => {
    console.log(this);
  },
};

obj4.sayHello()// 2
