
Core Rx Objects
    Observable
    Subscription
    Subject
    Schedulers

Observable Core
    next
    complete
    error

Operators

Classes of Operators
    - Creation Operators
    - Transformation Operators
    - Filtering Operators
    - Combination Operators
    - Multicasting Operators
    - Error Handling Operators
    - Utility Operators
    - Conditional and Boolean Operators
    - Mathematical and Aggregate Operators


Creation Operators
    Observable.ajax()
    Observable.bindCallback()
    Observable.bindNodeCallback()
    Observable.create()
    Observable.defer()
    Observable.empty()
    Observable.from()
    Observable.fromEvent()
    Observable.fromEventPattern()
    Observable.fromPromise()
    Observable.generate()
    Observable.interval()
    Observable.never()
    Observable.of()
    Observable.range()
    Observable.repeat()
    Observable.repeatWhen()
    Observable.throw()
    Observable.timer()

Operator Methods
Observable.merge()

Sequence Operators
obs_inst.map()
obs_inst.filter()

Aggregate Operators
obs_inst.reduce()
obs_inst.first()
obs_inst.flatMap()
obs_inst.scan();
obs_inst.concatAll();

Cancelation
Subscriber.unsubscribe()

Cancellation on wrapped APIs (i.e. a promise) - figure out how to send a cancellatoin from the subscriber down to the underlying promise

Error Handling 
obs_inst.catch()
obs_inst.retry()