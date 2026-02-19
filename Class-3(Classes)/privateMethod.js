class Pizaa {
    static totalPizzaMade = 0;
    #size;
  
    constructor(size, toppings, preference, crust) {
      this.#size = size;
      this.toppings = toppings;
      this.preference = preference;
      this.crust = crust;
      Pizaa.totalPizzaMade++;
    }
  
    static showTotalPizza() {
      console.log(`${Pizaa.totalPizzaMade}`);
    }
  
    // 🔒 Private Method
    #formatPizzaDetails() {
      return `This is a ${this.#size} ${this.preference} pizza with ${this.crust} crust`;
    }
  
    // Public method calling private method
    serve() {
      console.log(this.#formatPizzaDetails());
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
      super.serve(); // calls parent public method → which calls private method internally
    }
  }
  
  const order1 = new Pizaa("Medium", ["Tomato", "Cheese"], "Veg", "Thin");
  order1.serve();

  console.log(order1)
  
  const order2 = new StuffedCrustPizaa(
    "Small",
    ["Mushrooms", "Cheese"],
    "Veg",
    "Thick",
    "Mozarella"
  );
  
  order2.describe();
  
  Pizaa.showTotalPizza();



  