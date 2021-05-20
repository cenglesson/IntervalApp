import { Timer } from "easytimer.js";
import { resumeVisual } from './VisualTimer';
import { resumeText } from './TextTimer';
import { resumeAnalog } from './AnalogTimer';
import { resumeDigital } from './DigitalTimer';
const pauseTimer = document.getElementById('Pause') as HTMLElement;
const stopButton = document.getElementById('StopPauseButton') as HTMLElement;
const visual = document.getElementById('VisualTimer') as HTMLElement;
const analog = document.getElementById('AnalogTimer') as HTMLElement;
const text = document.getElementById('TextTimer') as HTMLElement;
const digital = document.getElementById('DigitalTimer') as HTMLElement;

const timer = new Timer();
const timerElements: HTMLElement[] = [visual, analog, text, digital];

export const BreakTimer = (type: string): void => {
    let timerScreen = timerElements.filter(el => {
        return el.id === type; 
    });
    timer.start({countdown: true, startValues: {minutes: 5}});
    timer.addEventListener('secondsUpdated', () => {
        pauseTimer.querySelector('#CurrentTime')!.innerHTML = timer.getTimeValues().toString();
    });
    timer.addEventListener('targetAchieved', (): void => {
        pauseTimer.classList.remove('active');
        timerScreen[0].classList.add('active');
        timer.stop();
        switch (type) {
            case 'VisualTimer':
                resumeVisual();
                break;
            case 'TextTimer':
                resumeText();
                break;
            case 'DigitalTimer':
                resumeDigital();
                break;
            case 'AnalogTimer':
                resumeAnalog();
                break;
            default:
                break;
        }
    });
    stopButton.addEventListener('click', (): void => {
        pauseTimer.classList.remove('active');
        timerScreen[0].classList.add('active');
        timer.stop();
        switch (type) {
            case 'VisualTimer':
                resumeVisual();
                break;
            case 'TextTimer':
                resumeText();
                break;
            case 'DigitalTimer':
                resumeDigital();
                break;
            case 'AnalogTimer':
                resumeAnalog();
                break;
            default:
                break;
        }
    });
}