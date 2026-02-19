function memoizeAdd() {
  const cache = {};

  return function (n) {
    if (cache[n]) return cache[n];

    cache[n] = n + n;
    return cache[n];
  };
}

const add = memoizeAdd()
console.log(add(6))
console.log(add(6))
