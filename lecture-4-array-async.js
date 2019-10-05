// Array Splice

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);


months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

// Array some()

var array = [1, 2, 3, 4, 5];

var even = function(element) {
    // checks whether an element is even
    return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true

console.log([1,3,5].some(even)); // expected output: false

// Array.every

function isBelowThreshold(currentValue) {
    return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
