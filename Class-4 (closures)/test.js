function createCounter() {
  let count = 0;

  return function () {
    count++; 
    return count;
  };
}

const c1 = createCounter(); // c1
const c2 = createCounter();

console.log(c1()); // 1
console.log(c1()); // 2
console.log(c2()); // 1 
