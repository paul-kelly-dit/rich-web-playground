// Side effects

// Is this a function with side effects?
function performCalculation(y) {
    let a = y * 10;
    calculated = true;
}

// What about this?
function performCalculation(y) {
    return y * 10;
}

// Map example
const toInt = (str) => {
    return parseInt(str);
};
['123', '456', '789'].map(toInt);

// Map example chain
const divideByTen = (num) => {
    return num / 10;
};

['123', '456', '789'].map(toInt).map(divideByTen);

// Currying example basic

const sum = x => y => x + y;
// returns the number 3
sum (2)(1);
// returns a function y => 2 + y
sum (2);