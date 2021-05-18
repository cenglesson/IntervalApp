import { Timer } from "easytimer.js";
import { BreakTimer } from './BreakTimer';
const timerEl = document.getElementById('VisualTimer') as HTMLElement;
const TimesUp = document.getElementById('TimesUp') as HTMLElement;
const visuals = document.getElementById('visualTime') as HTMLStyleElement;
const breakPage = document.getElementById('Pause') as HTMLElement;

const timer = new Timer();

export const VisualTimer = (time: number, type: string, abort: boolean) => {
    let currentTime = 0;
    let totalTime = time * 60;
    if (abort === true) {
        timer.stop();
        currentTime = 0;
    } else {
        timer.start({countdown: true, startValues: {minutes: time}});
    }
    timer.addEventListener('secondsUpdated', () => {
        currentTime++;
        let progress = currentTime / totalTime * 100;
        visuals.style.height = progress.toString() + '%';

        if (type === 'interval' && currentTime === totalTime) {
            timerEl.classList.remove('active');
            TimesUp.classList.add('active');
        } else if (type === 'intervalBreak' && currentTime === totalTime / 2) {
            timer.pause();
            timerEl.classList.remove('active');
            breakPage.classList.add('active');
            BreakTimer();
        }
    });
}

export const resume = () => {
    timer.start();
}