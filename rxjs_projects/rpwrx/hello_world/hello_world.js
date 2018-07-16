// { }
const Observable = require('rxjs').Observable;
Observable.of(1,2,3).subscribe(value => {
    console.log(value);
});