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

// Flatmap example

// type this in console
Array.from({length:3}).fill(1)

// ok now we automate
const echo = n => x => Array.from({length:n}).fill(x);

//[[1,1,1],[2,2,2],[3,3,3]]
console.log([1, 2, 3].map( echo(3) ));

// whats wrong with this?
console.log([1, 2, 3].flatMap( echo(3) ));

// Reduce example

const addValuesFn = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log([1, 2, 3, 4].reduce(addValuesFn));

// Filter example

let books = [{
    "id": 111,
    "title": "C# 6.0",
    "author": "ANDREW TROELSEN",
    "rating": [4.7],
    "reviews": [{good: 4, excellent: 12}]
}, {
    "id": 222,
    "title": "Efficient Learning Machines",
    "author": "Rahul Khanna",
    "rating": [4.5],
    "reviews": []
}, {
    "id": 333,
    "title": "Pro AngularJS",
    "author": "Adam Freeman",
    "rating": [4.0],
    "reviews": []
}];

// First lets doing a simple map first on a complex data structure
books.map(book => {
    var newObj = {title: book.title};
    return newObj;
});

// What if want to return only books with a rating greater than 4.5
books.filter(book => book.rating >= 4.5);

// We can also chain these to get just the titles returned.
books.filter(book => book.rating >= 4.5).map(b => b.title)


// Currying example basic

const sum = x => y => x + y;
// returns the number 3
sum (2)(1);
// returns a function y => 2 + y
sum (2);

// Another example

const curriedSubstring = start => length => str => str.substr(start, length);
const alwaysStartFirstChar = curriedSubstring(0);

// What is this going to print - try it out in JsBin
console.log(alwaysStartFirstChar(2)('Hello'));


// Generator functions
function * generatorFunction() {
    console.log('This will be executed first.');
    yield 'Hello, ';
    console.log('I will be printed after the pause');
    yield 'World!';
}
const generatorObject = generatorFunction();
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);

// Another example

function * makeGen() {
    yield 'Hello';
    yield 'World';
}

const g = makeGen(); // g is a generator
g.next(); // { value: 'Hello', done: false }
g.next(); // { value: 'World', done: false }
g.next(); // { value: undefined, done: true }

// Recursion

function factorial(x) {
    // TERMINATION
    if (x < 0)
        return;
    // BASE
    if (x === 0)
        return 1;
    // RECURSION
    return x * factorial(x - 1);
}

factorial(3);

// another recursion example

function revStr(str){
    if (str === '') return '';
    return revStr(str.substr(1)) + str[0];
}
revStr('cat');

revStr('cat') //returns revStr('at') + 'c'
revStr('at') //returns revStr('t') + 'a'
revStr('t')// returns revStr('') + 't'
revStr('')// returns ''