import { Timer } from "easytimer.js";
const timerEl = document.getElementById('VisualTimer') as HTMLElement;

export const BreakTimer = () => {
    const timer = new Timer();
    timer.start({countdown: true, startValues: {minutes: 5}});
}