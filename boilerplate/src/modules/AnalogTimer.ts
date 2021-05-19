import { Timer } from "easytimer.js";
import { BreakTimer } from './BreakTimer';
const timerEl = document.getElementById('AnalogTimer') as HTMLElement;
const TimesUp = document.getElementById('TimesUp') as HTMLElement;
const breakPage = document.getElementById('Pause') as HTMLElement;

const dialLines = document.getElementsByClassName('diallines') as HTMLCollectionOf<HTMLElement>;
const face = document.getElementsByClassName('analog-face')[0] as HTMLElement;

for (var i = 1; i < 60; i++) {
    face.innerHTML += "<div class='diallines'></div>";
    dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
  }

const timer = new Timer();

export const AnalogTimer = (time: number, type: string, abort: boolean): void => {

    if (abort === true) {
        timer.stop();
    } else {
        timer.start({countdown: true, startValues: {minutes: time}});
    }

    let currentTime = 0;
    let totalTime = time * 60;
    const minuteHand = document.getElementById('minuteMarker') as HTMLElement;
    const secondHand = document.getElementById('secondMarker') as HTMLElement;


    timer.addEventListener('secondsUpdated', (): void => {
        currentTime++;

        const secondsDegree = (((currentTime / 60) * 360) + 90);
        secondHand.style.transform = `rotate(${secondsDegree}deg)`


        if (currentTime % 60 == 0){
        const minutes = currentTime / 60
        const minutesDegree = (((minutes / 60) * 360) + 90);
        minuteHand.style.transform = `rotate(${minutesDegree}deg)`}


        if (type === 'interval' && currentTime === totalTime) {
            timerEl.classList.remove('active');
            TimesUp.classList.add('active');
        } else if (type === 'intervalBreak' && currentTime === totalTime / 2) {
            timer.pause();
            timerEl.classList.remove('active');
            breakPage.classList.add('active');
            BreakTimer('AnalogTimer');
        }

    });
}

export const resumeAnalog = (): void => {
    timer.start();
}

