import { Timer } from "easytimer.js";
import { BreakTimer } from './BreakTimer';
const myDiv = document.getElementById('textTimerTime') as HTMLElement;
const timerEl = document.getElementById('TextTimer') as HTMLElement;
const TimesUp = document.getElementById('TimesUp') as HTMLElement;
const breakPage = document.getElementById('Pause') as HTMLElement;

const timer: Timer = new Timer();

export const TextTimer = (time: number, type: string, abort: boolean) => {
    let currentTime = 0;
    let totalTime = time * 60;
    if (abort === true) {
        timer.stop();
    } else {
        timer.start({ countdown: true, startValues: { minutes: time } });
    }

    timer.addEventListener('secondsUpdated', (): void => {
        currentTime++;
        timer.start()
        const obj = timer.getTimeValues();
        const minuteText = getTimeText(obj.minutes);
        const secondsText = getTimeText(obj.seconds);

        myDiv.innerText = `${minuteText}minutes and ${secondsText}seconds left`;

        if (type === 'intervalBreak' && currentTime === totalTime / 2) {
            timer.pause();
            timerEl.classList.remove('active');
            breakPage.classList.add('active');
            BreakTimer('TextTimer');
        }
    })

    timer.on('targetAchieved', (): void => {
        console.log('DONE');
        timerEl.classList.remove('active');
        TimesUp.classList.add('active');
    })

    let oneToTwenty = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
        'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const getTimeText = (time: number) => {
        if (time < 20) return oneToTwenty[time];
        return tenth[Math.floor(time / 10)] + oneToTwenty[time % 10]
    }
}

export const resumeText = (): void => {
    timer.start();
}