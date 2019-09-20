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
