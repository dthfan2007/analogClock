const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
const now = new Date();
const hours = now.getHours();
const body = document.querySelector("body");

function setDate(initial = false) {
    const now = new Date();
    var body = document.getElementsByTagName("body");
    var clockElement = document.getElementsByClassName(".clock");

    //? Set the rotation for the seconds hand
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 96;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //? Set the rotation for the minute hand
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90; // Only based on minutes
    if (initial || seconds === 0) {
        // Update on initial load or when seconds reach 0
        minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    }

    //? Set the rotation for the hour hand
    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(body, hours, clockElement);
}

//? Call setDate immediately and set it to update every second
setDate(true);
setInterval(setDate, 1000);

const clock = document.querySelector(".clock");

//? Add hour markings
for (let i = 0; i < 12; i++) {
    const hourMark = document.createElement("div");
    hourMark.classList.add("marking");
    hourMark.style.transform = `rotate(${i * 30}deg) translate(0, -45%)`;
    clock.appendChild(hourMark);
}

//? Add minute markings
for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
        const minuteMark = document.createElement("div");
        minuteMark.classList.add("minute-marking");
        minuteMark.style.transform = `rotate(${i * 6}deg) translate(0, -45%)`;
        clock.appendChild(minuteMark);
    }
}

function updateBackground() {
    const present = new Date();
    let h = present.getHours();
    // console.log(h);
    switch (h) {
        case 0:
            body.classList.remove(...body.classList);
            body.classList.add("g0");
            break;
        case 1:
            body.classList.remove(...body.classList);
            body.classList.add("g1");
            break;
        case 2:
            body.classList.remove(...body.classList);
            body.classList.add("g2");
            break;
        case 3:
            body.classList.remove(...body.classList);
            body.classList.add("g3");
            break;
        case 4:
            body.classList.remove(...body.classList);
            body.classList.add("g4");
            break;
        case 5:
            body.classList.remove(...body.classList);
            body.classList.add("g5");
            break;
        case 6:
            body.classList.remove(...body.classList);
            body.classList.add("g6");
            break;
        case 7:
            body.classList.remove(...body.classList);
            body.classList.add("g7");
            break;
        case 8:
            body.classList.remove(...body.classList);
            body.classList.add("g8");
            break;
        case 9:
            body.classList.remove(...body.classList);
            body.classList.add("g9");
            break;
        case 10:
            body.classList.remove(...body.classList);
            body.classList.add("g10");
            break;
        case 11:
            body.classList.remove(...body.classList);
            body.classList.add("g11");
            break;
        case 12:
            body.classList.remove(...body.classList);
            body.classList.add("g12");
            break;
        case 13:
            body.classList.remove(...body.classList);
            body.classList.add("g13");
            break;
        case 14:
            body.classList.remove(...body.classList);
            body.classList.add("g14");
            break;
        case 15:
            body.classList.remove(...body.classList);
            body.classList.add("g15");
            break;
        case 16:
            body.classList.remove(...body.classList);
            body.classList.add("g16");
            break;
        case 17:
            body.classList.remove(...body.classList);
            body.classList.add("g17");
            break;
        case 18:
            body.classList.remove(...body.classList);
            body.classList.add("g18");
            break;
        case 19:
            body.classList.remove(...body.classList);
            body.classList.add("g19");
            break;
        case 20:
            body.classList.remove(...body.classList);
            body.classList.add("g20");
            break;
        case 21:
            body.classList.remove(...body.classList);
            body.classList.add("g21");
            break;
        case 22:
            body.classList.remove(...body.classList);
            body.classList.add("g22");
            break;
        case 23:
            body.classList.remove(...body.classList);
            body.classList.add("g23");
            break;
        default:
            break;
    }
}

updateBackground();
setInterval(updateBackground, 1000);
