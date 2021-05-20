import { Timer } from "easytimer.js";
import { BreakTimer } from './BreakTimer';
const timerEl = document.getElementById('CircleTimer') as HTMLElement;
const TimesUp = document.getElementById('TimesUp') as HTMLElement;
const first = document.getElementById('1stCircle') as HTMLElement;
const second = document.getElementById('2ndCircle') as HTMLElement;
const third = document.getElementById('3rdCircle') as HTMLElement;
const fourth = document.getElementById('4thCircle') as HTMLElement;
const fifth = document.getElementById('5thCircle') as HTMLElement;
const sixth = document.getElementById('6thCircle') as HTMLElement;
const seventh = document.getElementById('7thCircle') as HTMLElement;
const eight = document.getElementById('8thCircle') as HTMLElement;
const nineth = document.getElementById('9thCircle') as HTMLElement;
const tenth = document.getElementById('10thCircle') as HTMLElement;
const eleventh = document.getElementById('11thCircle') as HTMLElement;
const breakPage = document.getElementById('Pause') as HTMLElement;

const timer = new Timer();

export const CircleTimer = (time: number, type: string, abort: boolean): void => {
    let currentTime = 0;
    let totalTime = time * 60;
    if (abort === true) {
        timer.stop();
        currentTime = 0;
    } else {
        timer.start({countdown: true, startValues: {minutes: time}});
    }
    timer.addEventListener('secondsUpdated', (): void => {
        currentTime++;
        let progress = currentTime / totalTime * 100;
       
        if (progress == 10) {
            first.classList.remove('fill')
            second.classList.add('fill')
        } else if (progress == 20) {
            second.classList.remove('fill')
            third.classList.add('fill')
        } else if (progress == 30) {
            third.classList.remove('fill')
            fourth.classList.add('fill')
        }  else if (progress == 40) {
            fourth.classList.remove('fill')
            fifth.classList.add('fill')
        } else if (progress == 50) {
            fifth.classList.remove('fill')
            sixth.classList.add('fill')
        } else if (progress == 60) {
            sixth.classList.remove('fill')
            seventh.classList.add('fill')
        } else if (progress == 70) {
            seventh.classList.remove('fill')
            eight.classList.add('fill')
        } else if (progress == 80) {
            eight.classList.remove('fill')
            nineth.classList.add('fill')
        } else if (progress == 90) {
            nineth.classList.remove('fill')
            tenth.classList.add('fill')
        } else if (progress == 100) {
            tenth.classList.remove('fill')
            eleventh.classList.add('fill')
        }



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