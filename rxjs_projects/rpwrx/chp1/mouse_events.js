'use strict';
import Rx from "rxjs/Rx";

// import { Observable } from "rxjs";

function registrationScript() { 
    let clicks = 0;
    const registerClicks = e => {
        if (clicks < 10) {
            if (e.clientX > window.innerWidth / 2) {
                console.log(e.clientX, e.clientY);
                clicks += 1;
            }
        } else {
            document.removeEventListener("click", registerClicks);
        }
    };
    document.addEventListener("click", registerClicks);
}

function registerObservable() {
    Observable.fromEvent(document, "click")
        .filter(c => c.clientX > window.innerWidth / 2)
        .take(10)
        .subscribe(c => console.log("FrmObs: ", c.clientX, c.clientY));
}