// map - itreatates over each elemet of an array
// applies some function
// stores the result in a new array
// Defined in the array Prototype
// takes a callback
//we also have to pass the argument

// we are leavimg the use of thisArg - call method

let arr = ['a' , 'b']

let sqr = arr.map(function(num){
   return num*num
} , arr)

console.log(sqr) // Let us say you do not have map

// Create your own map

Array.prototype.myMap = function (callback) {
  //  



  if (typeof callback != "function") {

    throw new Error(`${callback} is not a function`);
  }

  let resultantArray = [];

  for (let i = 0; i < this.length; i++) {
   
    resultantArray.push(callback(this[i]));
  }

  return resultantArray;
};

// let arr2 = ['a' , 'b'];


// let ans = arr2.myMap(function(num){
//     return num*num
// })

// console.log(ans)
