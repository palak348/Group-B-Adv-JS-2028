// // Browser Non-Strict

// // console.log
// // function
// // objects method
// // function inside  method

// // console.log(this)

// // function

// function test() {
//   this.name = "Mrinal";
//   console.log(this);
// }

// test();

// // let obj = {
// //   name: "Adam",
// //   age: 27,
// //   greet: function () {
// //     console.log(this);
// //   },
// // };

// // let obj2 = {
// //   name: "Adam",
// //   age: 27,
// //   greet: function () {
// //      function sayHi() {
// //       console.log(this);
// //     };
// //     sayHi()
// //   },
// // };

// // obj2.greet();


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
