import { Timer } from "easytimer.js";
const myDiv = document.getElementById('textTimerTime') as HTMLElement;

export const TextTimer = (time: number, type: string) => {

    const timer: Timer = new Timer();

    timer.start({ countdown: true, startValues: { minutes: time } });

    timer.addEventListener('secondsUpdated', (): void => {
        timer.start()
        const obj = timer.getTimeValues();
        const minuteText = getTimeText(obj.minutes);
        const secondsText = getTimeText(obj.seconds);

        myDiv.innerText = `${minuteText}minutes and ${secondsText}seconds left`
    })

    timer.on('targetAchieved', () => {
        console.log('DONE')
    })

    let oneToTwenty = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
        'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const getTimeText = (time: number) => {
        if (time < 20) return oneToTwenty[time];
        return tenth[Math.floor(time / 10)] + oneToTwenty[time % 10]
    }
}