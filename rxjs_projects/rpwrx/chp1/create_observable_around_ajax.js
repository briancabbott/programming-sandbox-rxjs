global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var Rx = require('rxjs');
var Observable = Rx.Observable;
var Subscriber = Rx.Subscriber;

function get(url) {
    console.log("get()");
    return Observable.create(subscriber => {
        // Make a traditional Ajax request
        const req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = () => {
            if (req.status === 200) {
                // If the status is 200, meaning there have been no problems,
                // yield the result to listeners and complete the sequence
                subscriber.next(req.response);
                subscriber.complete();
            } else {
                console.log("error: ", req.status);
                // Otherwise, signal to listeners that there has been an error
                subscriber.error(new Error(req.statusText));
            }
        };
        req.onerror = () => {
            subscriber.error(new Error("Unknown Error"));
        };
        req.send();
    });
}

// Create an Ajax Observable
const test = get("https://developer.mozilla.org/");
test.subscribe(
    value => console.log(`Result: ${value}`),
    error => { console.log(`Error: ${error}`); throw error; },
    () => console.log("Completed")
);