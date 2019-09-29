// 1. let vs var start

function discountPricesVar (applyDiscount) {
    var discounted = []

    if (applyDiscount) {
      var discountedPrice = 20;
      discounted.push(discountedPrice)
    }
    console.log('Discounted Price: ' + discountedPrice);
    return discounted;
  };

  var prices = discountPricesVar(true);

  function discountPricesLet (applyDiscount) {
      let discounted = []

      if (applyDiscount) {
        let discountedPrice = 20;
        discounted.push(discountedPrice)
      }
      console.log('Discounted Price: ' + discountedPrice);
      return discounted;
    };

    let pricesLet = discountPricesLet(true);

  // let vs var finish..

  // 2. Functions as Function Arguments
  const squared = (n1) => {
      let result = n1 * n1;
      console.log("Result : " + result);
      return result;
  }

  const adder = (n1) => {
    let result = n1 + 1;
    console.log("Result : " + result);
    return result;
  }

  [1, 2, 3, 4, 5].forEach(squared);​
  [1, 2, 3, 4, 5].forEach(adder);​

  // As opposed too

let numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
    let result = numbers[i] * numbers[i];
    console.log(result);
}


for (var i = 0; i < numbers.length; i++) {
    let result = numbers[i] + 1;
    console.log(result);
}

// Functions as Function Arguments finish


// Functions can return functions
let val = 8;
function createAdder() {
    function addNumbers(a, b) {
        let ret = a + b;
        return ret;
    }

    return addNumbers;
}

let adder = createAdder();
let sum = adder(val, 8);
console.log('example of function returning a function: ', sum);

// end function can return functions

// Closure

function createCounter() {
    let counter = 0;

    // Whenever you declare a new function and assign
    // it to a variable, you store the function definition, as well as a closure

    // The variable myFunction is a function definition. Javascript also creates a closure when you store
    // a function definition. In this case the closure contains the variables that are in scope, in this case
    // the variable counter (with the value of 0).
    const myFunction = function () {
        counter = counter + 1;
        return counter;
    };

    // This returns the contents of the function (not the invocation),
    // after myFunction is removed from local execution context
    return myFunction;
};
// calling this createCounter returns a function definition (not an invocation)
const increment = createCounter();

// We now invocate the function(), initially counter above will be undefined, so treated as 0 kindof.
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

// End closure

// DOM elements
document.getElementsByTagName("section")[0];
document.getElementsByClassName('email')[0].innerText;


let el = document.getElementById('lecture-2'); // => HTMLParagraphElement
console.log(el.innerHTML);                 // => read
el.innerHTML = "<section>Another Sample Email</section>"
el.innerHTML = “new content”;               // => update
let el2 = document.getElementById('lecture-2');
console.lgo(el2);


let el = document.createElement("p"); 
let text = document.createTextNode("Hello, world!"); 
el.appendChild(text);
let where = document.getElementsByTagName("section")
document.body.insertBefore(el, where);


// End DOM access elements
