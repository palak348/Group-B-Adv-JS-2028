class Pizaa {
   static totalPizzaMade = 0;
   #size
   


  constructor(size, toppings, preference, crust) {
    this.#size = size;
    this.toppings = toppings;
    this.preference = preference;
    this.crust = crust;
    Pizaa.totalPizzaMade++
  }

  static showTotalPizza(){
    console.log(`${Pizaa.totalPizzaMade}`)
  }

  // Closures - Next Class

  serve() {
    console.log(`This is a ${this.size} Pizza from parent `);
  }
}

class StuffedCrustPizaa extends Pizaa {
  constructor(size, toppings, preference, crust, stuffing) {
    super(size, toppings, preference, crust);
    this.stuffing = stuffing;
  }

  test() {
    console.log("test");
  }

  describe() {
    super.serve();
  }
}

const order1 = new Pizaa("Medium", ["Tomato , Cheese"], "Veg", "Thin");
console.log(order1.size);
const order3 = new Pizaa("Medium", ["Tomato , Cheese"], "Veg", "Thin");
console.log(order3);
const order4 = new Pizaa("Medium", ["Tomato , Cheese"], "Veg", "Thin");
console.log(order4);
const order5 = new Pizaa("Medium", ["Tomato , Cheese"], "Veg", "Thin");
console.log(order5);

// // const order2 = new StuffedCrustPizaa(
// //   "small",
// //   ["mushrooms", "cheese"],
// //   "Veg",
// //   "Thick",
// //   "Mozarella"
// // );

// console.log(order2);

// order1.serve();
// order2.describe();

Pizaa.showTotalPizza()

// Classcial Inhertance in JS (prototypal)
// Static properties and methods

