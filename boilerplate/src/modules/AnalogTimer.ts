import { Timer } from "easytimer.js";
import { BreakTimer } from './BreakTimer';
const timerEl = document.getElementById('AnalogTimer') as HTMLElement;
const TimesUp = document.getElementById('TimesUp') as HTMLElement;
const breakPage = document.getElementById('Pause') as HTMLElement;
const minuteHand = document.getElementById('minuteMarker') as HTMLElement;
const secondHand = document.getElementById('secondMarker') as HTMLElement;


export const AnalogTimer = (time: number, type: string) => {
    const timer = new Timer();
    timer.start({countdown: true, startValues: {minutes: time}});
    let currentTime = 0;
    let totalTime = time * 60;
    


    timer.addEventListener('secondsUpdated', () => {
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
        } else if (type === 'intervalBreak' && currentTime === totalTime) {
            timerEl.classList.remove('active');
            breakPage.classList.add('active');
            BreakTimer();
        }
    });
}

