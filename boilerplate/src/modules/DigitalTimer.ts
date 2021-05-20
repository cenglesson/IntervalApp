import { Timer } from "easytimer.js";
import { BreakTimer } from './BreakTimer';

const digitalEl = document.getElementById('DigitalTimer') as HTMLElement;
const digitalShow = document.getElementById('digitalTimerTime') as HTMLElement;
const TimesUp = document.getElementById('TimesUp') as HTMLElement;
const pausePage = document.getElementById('Pause') as HTMLElement;
const pauseBtn = document.getElementById('StopPauseButton') as HTMLElement;

const timer = new Timer();

export const DigitalTimer = (time: number, type: string, abort: boolean): void => {

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

        
        const obj: any = timer.getTimeValues();
        
        digitalShow.innerText = `${obj.minutes.toString()}:${obj.seconds.toString()}`;
   
   
        if (type === 'interval' && currentTime === totalTime) {
            digitalEl.classList.remove('active');
            TimesUp.classList.add('active');
        } else if (type === 'intervalBreak' && currentTime === totalTime / 2) {
            timer.pause();
            digitalEl.classList.remove('active');
            pausePage.classList.add('active');
            BreakTimer('DigitalTimer');
        }


    })
    timer.on('targetAchieved', (): void => {
        console.log('Digital timer - DONE')
    })

    
    pauseBtn.addEventListener('click', (): void => (
        resumeDigital()
    ))
}



export const resumeDigital = (): void => {
    timer.start();
}