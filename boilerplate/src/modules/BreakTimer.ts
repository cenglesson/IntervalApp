import { Timer } from "easytimer.js";

export const BreakTimer = () => {
    const timer = new Timer();
    timer.start({countdown: true, startValues: {minutes: 5}});
}