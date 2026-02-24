// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce(function(acc , curr){
//    acc = acc+curr
//    return acc
// })

// console.log(sum)
// 1+0 = 1 - acc
// 1+2 = 3 - acc
// 3+3 = 6 = acc
//

Array.prototype.myReduce = function (cb, initialVal) {
  if (typeof callback != "function") {
    throw new Error(`${callback} is not a function`);
  }

  let accumulator;
  let firstIndex;

  if (arguments.length == 1) {
    accumulator = this[0];
    firstIndex = 1;
  } else {
    accumulator = initialVal;
    firstIndex = 0;
  }

  for (let i = firstIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i]);
  }

  return accumulator;
};

let arr1 = [1, 2, 3];

let sum1 = arr1.myReduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(sum1);
