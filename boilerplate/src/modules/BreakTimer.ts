import { Timer } from "easytimer.js";
import { VisualTimer, resume } from './VisualTimer';
const pauseTimer = document.getElementById('Pause') as HTMLElement;
const stopButton = document.getElementById('StopPauseButton') as HTMLElement;
const timerEl = document.getElementById('VisualTimer') as HTMLElement;

const timer = new Timer();

export const BreakTimer = () => {
    timer.start({countdown: true, startValues: {minutes: 5}});
    timer.addEventListener('secondsUpdated', () => {
        pauseTimer.querySelector('#CurrentTime')!.innerHTML = timer.getTimeValues().toString();
    });
    timer.addEventListener('targetAchieved', () => {
        pauseTimer.classList.remove('active');
        timerEl.classList.add('active');
        timer.pause();
        timer.reset();
        resume();
    });
    stopButton.addEventListener('click', () => {
        pauseTimer.classList.remove('active');
        timerEl.classList.add('active');
        timer.pause();
        timer.reset();
        resume();
    });
}