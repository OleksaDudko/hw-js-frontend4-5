import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css'
defaultModules.set(PNotifyMobile, {});


const keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
let currentKeyIndex = 0;

const keyElement = document.querySelector(".key")
const statusElement = document.querySelector(".start")
const newGameBtn = document.querySelector(".btn")

function setCurrentKey() {
    keyElement.textContent = keys[currentKeyIndex];
}

document.addEventListener('keydown', function(event) {
    const pressedKey = event.key.toLowerCase();
    const correctKey = keys[currentKeyIndex];
    if (pressedKey === correctKey) {
        currentKeyIndex++;

        if (currentKeyIndex >= keys.length) {
            statusElement.textContent = error({
                text: 'Ви виграли',
                delay: 3000,
            });
            currentKeyIndex = 0;
        } else {
            statusElement.textContent = "Правильно";
        }
        setCurrentKey();
    } else {
        statusElement.textContent = "Неправильна клавіша";
    }
});

document.addEventListener('keypress', function(event) {
    event.preventDefault();
});

newGameBtn.addEventListener('click', function() {
    currentKeyIndex = 0;
    setCurrentKey();
    statusElement.textContent = "Нова гра почалась";
});
setCurrentKey();