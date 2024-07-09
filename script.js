import { defaultMinutes } from "./constants.js";

const buttonStart = document.querySelector(".button-start");
const buttonPause = document.querySelector(".button-pause");
const buttonReset = document.querySelector(".button-reset");

let inputHours = document.querySelector(".input-hours");
let inputMinutes = document.querySelector(".input-minutes");
let inputSeconds = document.querySelector(".input-seconds");

document.querySelector(".input-hours").value = 0;
document.querySelector(".input-minutes").value = defaultMinutes;
document.querySelector(".input-seconds").value = 0;

let interval;

buttonStart.addEventListener("click", (event) => {
    event.preventDefault();
    buttonStart.style.display = "none";
    buttonPause.style.display = "block";
    inputHours.disabled = true;
    inputMinutes.disabled = true;
    inputSeconds.disabled = true;
    interval = setInterval(() => {
        let valueHours = document.querySelector(".input-hours").value;
        let valueMinutes = document.querySelector(".input-minutes").value;
        let valueSeconds = document.querySelector(".input-seconds").value;
        if (valueHours > 24 || valueMinutes > 60 || valueSeconds > 60 || isNaN(valueHours) || isNaN(valueMinutes) || isNaN(valueSeconds)) {
            alert("Error! Enter the correct time");
            buttonStart.style.display = "block";
            buttonPause.style.display = "none";
            inputHours.disabled = false;
            inputMinutes.disabled = false;
            inputSeconds.disabled = false;
            clearInterval(interval);
        } else {
            if (Number(valueSeconds) !== 0) {
                valueSeconds = valueSeconds - 1;
                document.querySelector(".input-seconds").value = valueSeconds;
            } else if (Number(valueSeconds) == 0 && Number(valueMinutes) !== 0) {
                valueMinutes = valueMinutes - 1;
                document.querySelector(".input-minutes").value = valueMinutes;
                document.querySelector(".input-seconds").value = 59;
            } else if (Number(valueSeconds) == 0 && Number(valueMinutes) == 0 && Number(valueHours) !== 0) {
                valueHours = valueHours - 1;
                document.querySelector(".input-hours").value = valueHours;
                document.querySelector(".input-minutes").value = 59;
                document.querySelector(".input-seconds").value = 59;
            } else if (Number(valueSeconds) == 0 && Number(valueMinutes) == 0 && Number(valueHours) == 0) {
                alert("Your time has come...");
                buttonStart.style.display = "block";
                buttonPause.style.display = "none";
                inputHours.disabled = false;
                inputMinutes.disabled = false;
                inputSeconds.disabled = false;
                clearInterval(interval);
            }
        }
    }, 1000)
})

buttonPause.addEventListener("click", (event) => {
    event.preventDefault();
    buttonStart.style.display = "block";
    buttonPause.style.display = "none";
    inputHours.disabled = false;
    inputMinutes.disabled = false;
    inputSeconds.disabled = false;
    clearInterval(interval);
})

buttonReset.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".input-hours").value = 0;
    document.querySelector(".input-minutes").value = defaultMinutes;
    document.querySelector(".input-seconds").value = 0;
})