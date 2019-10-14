/////////////////////

// Async

//
// This function is returning a todo item (as a
// JSON object with the string property text). To
// simulate a API call we’re delaying the response
// for 2 seconds by wrapping the return statement
// in an anonymous function which is passed to setTimeout.
const getTodo = () => {
    setTimeout(() => {
        return { text: 'Complete Code Example' }
    }, 2000);
};
const todo = getTodo();
console.log(todo.text);

// why does this result in an error?
// The code execution has continued without
// waiting for the call of getTodo to be finished.
// This is a typical problem when dealing with asynchronous code executing.

// Call back working

const getTodo = callback => {
    setTimeout(() => {
        callback ({ text: 'Complete Code Example' })
    }, 2000);
};

getTodo(todo => {
    console.log(todo.text)
});

// What prints now?

// Using XHR

let data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send(data);
