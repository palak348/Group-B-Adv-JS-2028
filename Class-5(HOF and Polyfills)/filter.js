// filter - itreatates over each elemet of an array
// this only checks witn a condition
// stores the result in a new array
// Defined in the array Prototype
// takes a callback
//we also have to pass the argument

Array.prototype.myFilter = function (callback) {
  // this -> array

  let resultantArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      resultantArray.push(this[i]);
    }
  }

  return resultantArray;
};
let numbers = [1, 2, 3, 4, 6, 5];

let evens = numbers.myFilter(function (num) {
  return num % 2 == 0;
});

console.log(evens);
