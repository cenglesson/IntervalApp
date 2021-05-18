import { Timer } from "easytimer.js";
import { BreakTimer } from './BreakTimer';
const timerEl = document.getElementById('VisualTimer') as HTMLElement;
const TimesUp = document.getElementById('TimesUp') as HTMLElement;
const visuals = document.getElementById('visualTime') as HTMLStyleElement;
const breakPage = document.getElementById('Pause') as HTMLElement;

export const VisualTimer = (time: number, type: string) => {
    const timer = new Timer();
    timer.start({countdown: true, startValues: {minutes: time}});
    let currentTime = 0;
    let totalTime = time * 60;
    timer.addEventListener('secondsUpdated', () => {
        currentTime++;
        let progress = currentTime / totalTime * 100;
        visuals.style.height = progress.toString() + '%';

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