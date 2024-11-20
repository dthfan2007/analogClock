const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
    const now = new Date();

    //? Set the rotation for the seconds hand
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //? Set the rotation for the minute hand
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    //? Set the rotation for the hour hand
    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

//? Repeat the setDate function
setInterval(setDate, 1000);

setDate();

const clock = document.querySelector(".clock");

//? Add hour markings
for (let i = 0; i < 12; i++) {
    const hourMark = document.createElement("div");
    hourMark.classList.add("marking");
    hourMark.style.transform = `rotate(${i * 30}deg) translate(0, -45%)`;
    clock.appendChild(hourMark);
}

//? Adjust the hour markings
for (let i = 0; i < 12; i++) {
    const hourMark = document.createElement("div");
    hourMark.classList.add("adjustMarking");
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

//? Adjust the minute markings
for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
        const minuteMark = document.createElement("div");
        minuteMark.classList.add("adjustMinuteMarking");
        minuteMark.style.transform = `rotate(${i * 6}deg) translate(0, -45%)`;
        clock.appendChild(minuteMark);
    }
}
