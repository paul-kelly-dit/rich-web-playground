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
  
