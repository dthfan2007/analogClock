const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
const now = new Date();
const hours = now.getHours();
const body = document.querySelector("body");
const paragraph = document.createElement("p");
let check = 24;

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

//? Function to update the gradient background based on the current time of day
function updateBackground() {
    const present = new Date();
    let h = present.getHours();
    let sentences = [
        [
            "The night is still young, but tomorrow is already waiting.",
            "The world sleeps; what are your midnight thoughts?",
            "Midnight, the perfect time for a quiet pause.",
            "Time to unwind and let the quiet of the night take over.",
            "Halfway through the night, the possibilities for tomorrow are endless.",
        ],
        [
            "It's the middle of the night – what dreams await?",
            "The silence of 1 AM holds the promise of rest.",
            "One hour into the night – how’s your rest going?",
            "The night feels infinite, but the morning is creeping closer.",
            "Late hour, quiet thoughts. Is it time to rest or keep going?",
        ],
        [
            "Two o'clock – time to decide if you're powering through or calling it a night.",
            "The world is asleep, but your thoughts are awake.",
            "Late night vibes: only the most profound ideas surface now.",
            "Two in the morning – darkness is your companion.",
            "Quiet and calm, the best time to reflect on the day.",
        ],
        [
            "3 AM – the hour where time seems to slow down.",
            "Only the night owls are awake now, in their thoughts and work.",
            "Are you still going or have you given in to the night?",
            "The night feels endless, but the morning will soon arrive.",
            "At 3 AM, time is yours – what will you do with it?",
        ],
        [
            "The early hours of the morning, where dreams are still fresh.",
            "Just an hour before dawn breaks – are you ready for the day ahead?",
            "The night is almost over; prepare yourself for a new day.",
            "Four AM – the perfect time for deep thought.",
            "The quietest time of day, yet the most powerful for reflection.",
        ],
        [
            "The sun is just about to rise. A brand new day awaits.",
            "Rise and shine – the early birds are waking up!",
            "The first light of the day is near – time to prepare.",
            "Five AM – a time of possibilities. What’s your goal today?",
            "The world is still sleeping, but soon it will come to life.",
        ],
        [
            "Good morning! The day is ready for you.",
            "The world is waking up; time to get moving.",
            "Six AM – time to make today count!",
            "The sun rises, and so should you.",
            "Start your day with energy – it's a brand new morning.",
        ],
        [
            "A fresh start at seven – let’s make today amazing!",
            "Morning is in full swing – what’s on your agenda?",
            "The sun is up, and so are the possibilities for today.",
            "Seven AM – the perfect time to get ahead of the day.",
            "Rise and shine, your day is waiting for you.",
        ],
        [
            "Good morning! The day is in full swing – let's get to work.",
            "The morning rush is on – time to get moving!",
            "Eight AM – the day is unfolding, and so are your opportunities.",
            "The early hours are behind us, but the day is just beginning.",
            "At eight o'clock, you're already ahead. Keep it up!",
        ],
        [
            "Time to dive into the day – nine o'clock calls for action!",
            "The morning is halfway through – what have you accomplished so far?",
            "It’s 9 AM – time to focus and tackle those goals.",
            "A productive morning is always a good start to the day.",
            "Nine o’clock – the energy is flowing. Let’s keep going!",
        ],
        [
            "The morning is in full swing – what are you achieving today?",
            "Ten o’clock – you’re getting closer to reaching your goals.",
            "The day is running smoothly. Keep the momentum going!",
            "By ten, you've got a few hours under your belt. What’s next?",
            "It’s 10 AM – time to take charge of your day!",
        ],
        [
            "The day is almost at its peak – time to get things done!",
            "11 AM – you’re halfway to lunch, but there’s still work to do.",
            "Only an hour left before noon – make the most of it.",
            "It’s 11 AM – you're on track for a productive day!",
            "At 11 AM, focus is key. Stay ahead and keep pushing.",
        ],
        [
            "It’s noon! Time for a break or a quick recharge.",
            "The clock strikes twelve – half the day is already behind you.",
            "Lunch break time! Recharge and get ready to take on the afternoon.",
            "Noon marks a pause in the day – how's your progress?",
            "Take a breath, it’s midday. Let’s make the rest of the day count!",
        ],
        [
            "Good afternoon! Ready for the next chapter of your day?",
            "One PM – time to refocus and hit your afternoon goals.",
            "The afternoon is here – keep up the momentum!",
            "Lunch is over, but the work isn’t done. Time to get back to it.",
            "At 1 PM, the day is yours to shape. What will you do next?",
        ][
            ("The afternoon energy is rising – keep pushing through.",
            "It’s 2 PM – a great time to check in on your goals.",
            "The afternoon is young, and there's still plenty to achieve.",
            "Two o’clock, the perfect time to tackle tasks with renewed energy.",
            "The second half of the day is here – what’s next on your list?")
        ],
        [
            "Three PM – the day is moving fast, but there’s still time.",
            "Keep going strong – the afternoon is almost over!",
            "Three o’clock – make the most of the remaining hours.",
            "At 3 PM, you’re just a few hours away from winding down.",
            "Power through the afternoon – it’s almost time for a break.",
        ],
        [
            "Four o’clock – the end of the day is in sight.",
            "Only a few hours left – how will you finish today?",
            "The sun is setting, but your work isn’t done just yet.",
            "Four PM – you’re almost there!",
            "Push through the final stretch of the day!",
        ],
        [
            "It’s five PM – almost time to wrap up the day.",
            "The evening is here – reflect on what you’ve accomplished.",
            "Five PM marks the transition from work to rest.",
            "At five o’clock, it's time to close out your tasks.",
            "The day is winding down, but the evening has its own opportunities.",
        ],
        [
            "Good evening! Time to relax after a productive day.",
            "The evening has arrived – how will you spend it?",
            "Six o'clock – time for a break and some downtime.",
            "Evening hours are perfect for unwinding and reflection.",
            "The sun is setting – time to rest and recharge.",
        ],
        [
            "Seven PM – the perfect time to relax and enjoy the evening.",
            "A quiet evening ahead, time to unwind.",
            "The day has ended, but the evening holds many possibilities.",
            "Relax and reflect – it's time to enjoy the calm of the night.",
            "The night is young, and so are your plans.",
        ],
        [
            "Eight PM – a time to wind down and relax.",
            "The evening is still young – what will you do next?",
            "Eight o'clock – time to unwind after a long day.",
            "Relax, enjoy, and prepare for a restful night ahead.",
            "The world is quieter now; it’s the perfect time for calm thoughts.",
        ],
        [
            "Nine PM – the perfect time to wind down and get cozy.",
            "The night is peaceful – how are you wrapping up your day?",
            "As the evening goes on, take a moment to reflect.",
            "Time to relax – let the night soothe you.",
            "Nine o'clock – soon it will be time to rest and recharge for tomorrow.",
        ],
        [
            "It’s 10 PM – a quiet end to a busy day.",
            "The day is winding down – take a moment for yourself.",
            "The night is quiet, and so should your mind be.",
            "Only a few more hours before the day ends.",
            "Time to start preparing for rest – tomorrow is a new day.",
        ],
        [
            "11 PM – the day is almost over, time to unwind.",
            "The final hour before midnight – how will you end today?",
            "A peaceful end to the day – ready to let go and rest?",
            "The night deepens – prepare for tomorrow with a calm mind.",
            "11 PM – reflect on today and look forward to the next chapter.",
        ],
    ];
    let sentenceTime = h - 1;
    if (sentenceTime < 0) {
        sentenceTime = 23;
    }

    if (check != h) {
        paragraph.className = "sentence";
        if (h > 8 && h < 16) {
            paragraph.classList.add("day");
        }
        paragraph.textContent =
            sentences[sentenceTime][Math.floor(Math.random() * 5)];
        document.body.appendChild(paragraph);
        console.log("done");
    }
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

    check = h;
}

updateBackground();
setInterval(updateBackground, 1000);
