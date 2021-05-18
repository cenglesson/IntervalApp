import { Timer } from "easytimer.js";
import { AnalogTimer } from "./modules/AnalogTimer";
import { VisualTimer } from "./modules/VisualTimer";
import { DigitalTimer } from "./modules/DigitalTimer";
import { TimerSetUp } from "./modules/TimerSetUp";


const timer = new Timer();
timer.start({ countdown: true, startValues: { minutes: 10 } });
timer.addEventListener("secondsUpdated", () => {
    document.getElementById('time')!.innerHTML = timer.getTimeValues().toString();
});


// Loadingpage.
const loadingpageElem: HTMLElement = document.querySelector('#loading');
const startpageElem: HTMLElement = document.querySelector('#setuptimer');
const changeBtn: HTMLElement = document.querySelector('.changeBtn');
const pageElem: HTMLElement = document.querySelector('#time-step');

changeBtn.addEventListener('click', () => {
    loadingpageElem.classList.remove('active');
    startpageElem.classList.add('active');
    pageElem.classList.add('active');

});