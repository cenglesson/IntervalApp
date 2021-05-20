import { Timer } from "easytimer.js";
import { BreakTimer } from './BreakTimer';
const timerEl = document.getElementById('VisualTimer') as HTMLElement;
const TimesUp = document.getElementById('TimesUp') as HTMLElement;
const visuals = document.getElementById('visualTime') as HTMLStyleElement;
const breakPage = document.getElementById('Pause') as HTMLElement;
const liquid = document.getElementById('liquidDiv') as HTMLStyleElement;

const timer = new Timer();

export const VisualTimer = (time: number, type: string, abort: boolean): void => {
    let currentTime = 0;
    let totalTime = time * 60;
    if (abort === true) {
        timer.stop();
        currentTime = 0;
    } else {
        timer.start({countdown: true, startValues: {minutes: time}});
    }
    liquid.style.marginTop = '-30px';
    timer.addEventListener('secondsUpdated', (): void => {
        currentTime++;
        let progress = currentTime / totalTime * 100;
        visuals.style.height = progress.toString() + '%';
        liquid.style.top = (progress).toString() + '%';

        if (type === 'interval' && currentTime === totalTime) {
            timerEl.classList.remove('active');
            TimesUp.classList.add('active');
        } else if (type === 'intervalBreak' && currentTime === totalTime / 2) {
            timer.pause();
            timerEl.classList.remove('active');
            breakPage.classList.add('active');
            BreakTimer('VisualTimer');
        }
    });
}

export const resumeVisual = (): void => {
    timer.start();
}