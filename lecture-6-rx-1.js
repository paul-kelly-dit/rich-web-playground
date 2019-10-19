window.onload = function() {
    // import { fromEvent } from 'rxjs';
    const button = document.getElementById('myButton');
    const myObservable = Rx.Observable.fromEvent(button, 'click');
    const subscription = myObservable.subscribe(event => console.log(event));
};


