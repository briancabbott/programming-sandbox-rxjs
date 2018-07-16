

# programming-sandbox-rxjs
Programming repo/Playground for RxJS - Reactive-Extensions for JavaScript.

Installed Dependencies
    - TS-Lint
    - JS-Lint
    - RxJS@5.5.0 (need to rework on 6.2.0, latest RxJS)
    - rxjs-tslint (using npm i -g) 


Dev-Notes on Build Problems:

    I had problems on getting the imports to compile/run correctly. From what I saw online, I thought that the following syntax would be correct. But, it turns out that this is the syntax for ES7.:

        JavaScript ES7 Function Bind Syntax
            import {Observable} from "rxjs/Observable";
            import "rxjs/add/observable/interval";
            import {take} from "rxjs/operator/take";
            import {map} from "rxjs/operator/map";
            import {bufferCount} from "rxjs/operator/bufferCount"

Resources
    http://reactivex.io/tutorials.html
    https://www.youtube.com/watch?v=XRYN2xt11Ek
    https://www.youtube.com/watch?v=XE692Clb5LU
    https://www.youtube.com/watch?v=5uxSu-F5Kj0

Reactive Streams:
    https://github.com/topics/reactive-streams
    https://github.com/reactor
    https://martinfowler.com/articles/collection-pipeline/