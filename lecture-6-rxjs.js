function filterExample() {
    //emit (1,2,3,4,5)
    const source = Rx.Observable.from([1,2,3,4,5]);
//filter out non-even numbers
    const example = source.filter(num => num % 2 === 0);
//output: "Even number: 2", "Even number: 4"
    const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));

//emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
    const sourceTwo = Rx.Observable.from([{name: 'Joe', age: 31}, {name: 'Bob', age:25}]);
//filter out people with age under 30
    const exampleTwo = sourceTwo.filter(person => person.age >= 30);
//output: "Over 30: Joe"
    const subscribeTwo = exampleTwo.subscribe(val => console.log(`Over 30: ${val.name}`));

//emit every second
    const sourceThree = Rx.Observable.interval(1000);
//filter out all values until interval is greater than 5
    const exampleThree = sourceThree.filter(num => num > 5);
    /*
      "Number greater than 5: 6"
      "Number greater than 5: 7"
      "Number greater than 5: 8"
      "Number greater than 5: 9"
    */
    const subscribeThree = exampleThree.subscribe(val => console.log(`Number greater than 5: ${val}`));
}

function mergeExample() {
//emit every 2.5 seconds
    const first = Rx.Observable.interval(2500);
//emit every 2 seconds
    const second = Rx.Observable.interval(2000);
//emit every 1.5 seconds
    const third = Rx.Observable.interval(1500);
//emit every 1 second
    const fourth = Rx.Observable.interval(1000);

//emit outputs from one observable
    const example = Rx.Observable.merge(
        first.mapTo('FIRST!'),
        second.mapTo('SECOND!'),
        third.mapTo('THIRD'),
        fourth.mapTo('FOURTH')
    );
//output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
    const subscribe = example.subscribe(val => console.log(val));

//used as instance method
    const exampleTwo = first.merge(fourth);
//output: 0,1,0,2....
    const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
}

function mergeMapExample() {
    //emit 'Hello'
    const source = Rx.Observable.of('Hello');
//map to inner observable and flatten
    const example = source.mergeMap(val => Rx.Observable.of(`${val} World!`));
//output: 'Hello World!'
    const subscribe = example.subscribe(val => console.log(val));

//mergeMap also emits result of promise
    const myPromise = val => new Promise(resolve => resolve(`${val} World From Promise!`));
//map to promise and emit result
    const exampleTwo = source.mergeMap(val => myPromise(val));
//output: 'Hello World From Promise'
    const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
    /*
      you can also supply a second argument which recieves the source value and emitted
      value of inner observable or promise
    */
    const exampleThree = source
        .mergeMap(val => myPromise(val),
            (valueFromSource, valueFromPromise) => {
                return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
            });
//output: "Source: Hello, Promise: Hello World From Promise!"
    const subscribeThree = exampleThree.subscribe(val => console.log(val));
}

function partitionExample() {
    const source = Rx.Observable.from([1,2,3,4,5,6]);
//first value is true, second false
    const [evens, odds] = source.partition(val => val % 2 === 0);
    /*
      Output:
      "Even: 2"
      "Even: 4"
      "Even: 6"
      "Odd: 1"
      "Odd: 3"
      "Odd: 5"
    */
    const subscribe = Rx.Observable.merge(
        evens
            .map(val => `Even: ${val}`),
        odds
            .map(val => `Odd: ${val}`)
    ).subscribe(val => console.log(val));
//if greater than 3 throw
    const example = source
        .map(val => {
            if(val > 3){
                throw `${val} greater than 3!`
            }
            return {success: val};
        })
        .catch(val => Rx.Observable.of({error: val}));
//split on success or error
    const [success, error] = example.partition(res => res.success)
    /*
      Output:
      "Success! 1"
      "Success! 2"
      "Success! 3"
      "Error! 4 greater than 3!"
    */
    const subscribeTwo = Rx.Observable.merge(
        success.map(val => `Success! ${val.success}`),
        error.map(val => `Error! ${val.error}`)
    ).subscribe(val => console.log(val));
}

function pluckExample() {
    const source = Rx.Observable.from([
        {name: 'Joe', age: 30},
        {name: 'Sarah', age:35}
    ]);
    //grab names
    const example = source.pluck('name');
    //output: "Joe", "Sarah"
    const subscribe = example.subscribe(val => console.log(val));
}

function everyExample() {
//emit 5 values
    const source = Rx.Observable.of(1,2,3,4,5);
    const example = source
    //is every value even?
        .every(val => val % 2 === 0)
//output: false
    const subscribe = example.subscribe(val => console.log(val));
//emit 5 values
    const allEvens = Rx.Observable.of(2,4,6,8,10);
    const exampleTwo = allEvens
    //is every value even?
        .every(val => val % 2 === 0);
//output: true
    const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
};

function doExample() {
    const source = Rx.Observable.of(1, 2, 3, 4, 5);
    //transparently log values from source with 'do'
    const example = source
        .do(val => console.log(`BEFORE MAP: ${val}`))
        .map(val => val + 10)
        .do(val => console.log(`AFTER MAP: ${val}`));
    //'do' does not transform values
    //output: 11...12...13...14...15
    const subscribe = example.subscribe(val => console.log(val));
};

function concat() {
    //emits 1,2,3
    const sourceOne = Rx.Observable.of(1, 2, 3);
    //emits 4,5,6
    const sourceTwo = Rx.Observable.of(4, 5, 6);
    //emit values from sourceOne, when complete, subscribe to sourceTwo
    const concatSource = sourceOne.concat(sourceTwo);
    //output: 1,2,3,4,5,6
    const subscribe = concatSource.subscribe(val => console.log('Example 1: Basic concat:', val));

    //delay 3 seconds then emit
    const delayedSourceOne = sourceOne.delay(3000);
    //sourceTwo waits on sourceOne to complete before subscribing
    const concatDelayedSource = delayedSourceOne.concat(sourceTwo);
    //output: 1,2,3,4,5,6
    const subscribeDelayed = concatDelayedSource.subscribe(val => console.log('Example 2: Delayed source one:', val));

    //when sourceOne never completes, the subsequent observables never run
    const sourceOneNeverComplete = Rx.Observable
        .concat(
            Rx.Observable.interval(1000),
            Rx.Observable.of('This', 'Never', 'Runs')
        ).delay(5000);  //for logging clarity

    //outputs: 1,2,3,4....
    const subscribeNeverComplete = sourceOneNeverComplete.subscribe(val => console.log('Example 3: Source one never completes, second observable never runs:', val));
}