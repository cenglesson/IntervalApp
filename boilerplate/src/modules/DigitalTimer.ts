import { Timer } from "easytimer.js";

// const digitalEl = document.getElementById('DigitalTimer') as HTMLElement;
const digitalShow = document.getElementById('digitalTimerTime') as HTMLElement;

export const DigitalTimer = (time: number, type: string) => {
    const timer: Timer = new Timer();
    timer.start({countdown: true, startValues: {seconds: time}});

timer.addEventListener('secondsUpdated', ():void => {
    timer.start()
    const obj: any = timer.getTimeValues();
    digitalShow.innerText = `${obj.minutes.toString()}:${obj.seconds.toString()}`

   
 
})
timer.on('targetAchieved', () => {
    console.log('WOHOOO')
})
    
}

