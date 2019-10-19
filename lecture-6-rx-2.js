function map() {
    const userMessage = document.getElementById('output');
    const dataSource = Rx.Observable.of(1, 2, 3, 4, 5);
    const subscription = dataSource.map(value => value + 1)
        .subscribe(value => console.log(value));
}

function filter() {
    const userMessage = document.getElementById('output');
    const dataSource = Rx.Observable.of(1, 2, 3, 4, 5);
    const subscription = dataSource.filter(value => value >= 3)
        .subscribe(value => console.log(value));
}

function combineLatest() {
    const userMessage = document.getElementById('output');
    // timerOne emits first value at 1s, then once every 4s
    const timerOne$ = Rx.Observable.timer(1000, 4000);

    // timerTwo emits first value at 2s, then once every 4s
    const timerTwo$ = Rx.Observable.timer(3000, 10000);

    Rx.Observable.combineLatest(timerOne$, timerTwo$).subscribe(
        ([timerValOne, timerValTwo]) => {
            userMessage.innerHTML = `Timer One Latest: ${timerValOne}, Timer Two Latest: ${timerValTwo}`;
        }
    );
}

// You can think of concat like a line at a ATM,
// the next transaction (subscription) cannot start
// until the previous completes!
function concat() {

// elems
    const userMessage = document.getElementById('output');
// helper
    const delayedMessage = (message, delayedTime = 1000) => {
        return Rx.Observable.empty().startWith(message).delay(delayedTime)
    };

    Rx.Observable.concat(
        delayedMessage('Get Ready!'),
        delayedMessage(3),
        delayedMessage(2),
        delayedMessage(1),
        delayedMessage('Go!'),
        delayedMessage('', 2000)
    ).subscribe((message) => (userMessage.innerHTML = message));
}

