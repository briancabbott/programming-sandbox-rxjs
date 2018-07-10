
var Rx = require('rxjs');
var Observable = Rx.Observable;
var Subscriber = Rx.Subscriber;

const observable = Observable.create(observer => {
    observer.next("Simon");
    observer.next("Jen");
    observer.next("Sergi");
    observer.complete(); // We are done
});

const subscriber = Subscriber.create(
    value => console.log(`Next: ${value}`),
    error => console.log(`Error: ${error}`),
    () => console.log("Completed")
);

observable.subscribe(subscriber);