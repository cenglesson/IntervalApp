import { Timer } from "easytimer.js";
import { AnalogTimer } from "./modules/AnalogTimer";
import { VisualTimer } from "./modules/VisualTimer";
import { DigitalTimer } from "./modules/DigitalTimer";
import { TimerSetUp } from "./modules/TimerSetUp";


const timer = new Timer();
timer.start({countdown: true, startValues: {minutes: 10}});
timer.addEventListener("secondsUpdated", () => {
    document.getElementById('time')!.innerHTML = timer.getTimeValues().toString();
});