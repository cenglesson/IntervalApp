import { Timer } from "easytimer.js";

const digitalEl = document.getElementById('DigitalTimer') as HTMLElement;
const digitalShow = document.getElementById('digitalTimerTime') as HTMLElement;

export const DigitalTimer = (time: number, type: string) => {
    const timer = new Timer();
    timer.start({countdown: true, startValues: {minutes: time}});

timer.addEventListener('secondsUpdated', ():void => {
    timer.start({
        precision: 'secondTenths'
    })
    const obj = timer.getTimeValues();
    digitalShow.innerText = `${obj.minutes.toString()}:${obj.seconds.toString()}`
    
})
    
}

