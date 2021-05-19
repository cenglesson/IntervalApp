import { Timer } from "easytimer.js";
import { resume } from './VisualTimer';
const pauseTimer = document.getElementById('Pause') as HTMLElement;
const stopButton = document.getElementById('StopPauseButton') as HTMLElement;
const visual = document.getElementById('VisualTimer') as HTMLElement;
const analog = document.getElementById('AnalogTimer') as HTMLElement;
const text = document.getElementById('TextTimer') as HTMLElement;
const digital = document.getElementById('DigitalTimer') as HTMLElement;

const timer = new Timer();
const timerElements: HTMLElement[] = [visual, analog, text, digital];

export const BreakTimer = (type: string) => {
    let timerScreen = timerElements.filter(el => {
        return el.className === type; 
    });
    timer.start({countdown: true, startValues: {minutes: 5}});
    timer.addEventListener('secondsUpdated', () => {
        pauseTimer.querySelector('#CurrentTime')!.innerHTML = timer.getTimeValues().toString();
    });
    timer.addEventListener('targetAchieved', () => {
        pauseTimer.classList.remove('active');
        timerScreen[0].classList.add('active');
        timer.pause();
        timer.reset();
        resume();
    });
    stopButton.addEventListener('click', () => {
        pauseTimer.classList.remove('active');
        timerScreen[0].classList.add('active');
        timer.pause();
        timer.reset();
        resume();
    });
}