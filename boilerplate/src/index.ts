import { AnalogTimer } from "./modules/AnalogTimer";
import { VisualTimer } from "./modules/VisualTimer";
import { DigitalTimer } from "./modules/DigitalTimer";
import { TextTimer } from "./modules/TextTimer";
import { CircleTimer } from "./modules/CirclesTimer";

//Timer setup
const setupPage = document.getElementById('setuptimer') as HTMLElement;
const visualTimerEl = document.getElementById('VisualTimer') as HTMLElement;
const AnalogTimerEl = document.getElementById('AnalogTimer') as HTMLElement;
const DigitalTimerEl = document.getElementById('DigitalTimer') as HTMLElement;
const TextTimerEl = document.getElementById('TextTimer') as HTMLElement;
const TimesUpScreen = document.getElementById('TimesUp') as HTMLElement;
const CircleTimerEl = document.getElementById('CircleTimer') as HTMLElement;
const stepLeftButton = document.getElementById('stepLeft') as HTMLElement;
const stepRightButton = document.getElementById('stepRight') as HTMLElement;
const timeNumber = document.getElementById('displayTime') as HTMLElement;
const timerType = document.getElementById('TimerType') as HTMLElement;
const intervalCheck = document.getElementById('IntervalCheck') as HTMLElement;
const intervalBreakCheck = document.getElementById('IntervalBreakCheck') as HTMLElement;
const timerStyles = document.getElementById('timerStyles') as HTMLElement;
const _analog = document.getElementById('_analog') as HTMLElement;
const _digital = document.getElementById('_digital') as HTMLElement;
const _visual = document.getElementById('_visual') as HTMLElement;
const _text = document.getElementById('_text') as HTMLElement;
const _circle = document.getElementById('_circle') as HTMLElement;
const startTimerButton = document.getElementById('StartTimer') as HTMLButtonElement;
const abortButtons = document.querySelectorAll('.abort-button');

let startValue: number = 10;
let type: string = 'interval';
let timerStyle: string = 'analog';

const setMinutes = (e: any): void => {
    if (e.target.id === "stepRight") {
        timeNumber.innerHTML = (startValue += 1).toString();
    } else {
        timeNumber.innerHTML = (startValue -= 1).toString();
    }
}

stepLeftButton.addEventListener('click', setMinutes);
stepRightButton.addEventListener('click', setMinutes);

const setType = (e: any): void => {
    if (e.target.id === 'IntervalCheck') {
        intervalBreakCheck.classList.remove('checked');
        intervalCheck.classList.add('checked');
        type = 'interval';
    } else {
        intervalCheck.classList.remove('checked');
        intervalBreakCheck.classList.add('checked');
        type = 'intervalBreak';
    }
}

timerType.querySelectorAll('.box').forEach(el => {
    el.addEventListener('click', setType);
});

const setTimerStyles = (e: any): void => {
    if (e.target.id === '_analog') {
        _digital.classList.remove('checked');
        _visual.classList.remove('checked');
        _text.classList.remove('checked');
        _circle.classList.remove('checked');
        _analog.classList.add('checked');
        timerStyle = 'analog';
    } else if (e.target.id === '_digital') {
        _analog.classList.remove('checked');
        _visual.classList.remove('checked');
        _text.classList.remove('checked');
        _circle.classList.remove('checked');
        _digital.classList.add('checked');
        timerStyle = 'digital';
    } else if (e.target.id === '_text') {
        _analog.classList.remove('checked');
        _visual.classList.remove('checked');
        _digital.classList.remove('checked');
        _circle.classList.remove('checked');
        _text.classList.add('checked');
        timerStyle = 'text';
    } else if (e.target.id === '_circle') {
        _analog.classList.remove('checked');
        _visual.classList.remove('checked');
        _digital.classList.remove('checked');
        _text.classList.remove('checked');
        _circle.classList.add('checked');
        timerStyle = 'circle';
    } else {
        _analog.classList.remove('checked');
        _digital.classList.remove('checked');
        _text.classList.remove('checked');
        _circle.classList.remove('checked');
        _visual.classList.add('checked');
        timerStyle = 'visual';
    }
}

timerStyles.querySelectorAll('.box').forEach(el => {
    el.addEventListener('click', setTimerStyles);
});

//Start timer
const startTimer = (): void => {
    setupPage.classList.remove('active');
    switch (timerStyle) {
        case 'analog':
            AnalogTimerEl.classList.add('active');
            AnalogTimer(startValue, type, false);
            break;
        case 'digital':
            DigitalTimerEl.classList.add('active');
            DigitalTimer(startValue, type, false);
            break;
        case 'visual':
            visualTimerEl.classList.add('active');
            VisualTimer(startValue, type, false);
            break;
        case 'text':
            TextTimerEl.classList.add('active');
            TextTimer(startValue, type, false);
            break;
        case 'circle':
            CircleTimerEl.classList.add('active');
            CircleTimer(startValue, type, false);
            break;
        default:
            break;
    }
}


startTimerButton.addEventListener('click', startTimer);


// Loadingpage.
const loadingpageElem = document.querySelector('#loading') as HTMLElement;
const startpageElem = document.querySelector('#setuptimer') as HTMLElement;
const changeBtn = document.querySelector('.changeBtn') as HTMLElement;
const pageElem = document.querySelector('#time-step') as HTMLElement;

changeBtn.addEventListener('click', () => {
    loadingpageElem.classList.remove('active');
    startpageElem.classList.add('active');
    pageElem.classList.add('active');

});

//Abort timer
const abortTimer = (e: any): void => {
    switch (timerStyle) {
        case 'analog':
            AnalogTimerEl.classList.remove('active');
            AnalogTimer(startValue, type, true);
            break;
        case 'digital':
            DigitalTimerEl.classList.remove('active');
            DigitalTimer(startValue, type, true);
            break;
        case 'visual':
            visualTimerEl.classList.remove('active');
            VisualTimer(startValue, type, true);
            break;
        case 'text':
            TextTimerEl.classList.remove('active');
            TextTimer(startValue, type, true);
            break;
        case 'circle':
            CircleTimerEl.classList.remove('active');
            CircleTimer(startValue, type, true);
            break;
        default:
            break;
    }
    setupPage.classList.add('active');
}

abortButtons.forEach(button => {
    button.addEventListener('click', abortTimer)
});

//Times up 
document.getElementById('SetUpNewTimer')!.addEventListener('click', (): void => {
    TimesUpScreen.classList.remove('active');
    setupPage.classList.add('active');
});