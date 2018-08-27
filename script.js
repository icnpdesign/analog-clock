// Selectors for hands
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Changes position of hands
function runClock() {
    var date = new Date();
    console.log(date);

    //Variables for time
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour:" + hr + " Minute:" + min + " Second:" + sec);

    // Calculates position of hands based on time.
        /* Adjusted to move hour and minute hands
        to move progressively in between hours/minutes */
    let hrPosition = (hr * 360) + (min*(360/60)/12);
    let minPosition = (min*360/60) + (sec*(360/60)/60);
    let secPosition = sec*360/60;

    // Rotates hands based on the positions calculated
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}
// Updates clock every second
var interval = setInterval(runClock, 1000);
