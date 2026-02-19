// Closures

// Lexical Scope?

function outer() {
  let a = 10

   function inner(){
      console.log(a)
   }

   return inner
}

let in1 = outer();

in1()
