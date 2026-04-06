import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css'
defaultModules.set(PNotifyMobile, {});

const keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
let currentKeyIndex = 0;

const keyEl = document.querySelector(".key")
const statusEl = document.querySelector(".start")
const btnEl = document.querySelector(".btn")

function setCurrentKey() {
    keyEl.textContent = keys[currentKeyIndex];
}

document.addEventListener('keydown', function(event) {
    const pressedKey = event.key.toLowerCase();
    const correctKey = keys[currentKeyIndex];
    if (pressedKey === correctKey) {
        currentKeyIndex++;

        if (currentKeyIndex >= keys.length) {
            statusEl.textContent = "Ви перемогли"
            PNotify.success({
                text: 'Ви перемогли!',
                delay: 2000
            });

            currentKeyIndex = 0;
        } else {
            statusEl.textContent = "Правильно";
        }
        setCurrentKey();
    } else {
        statusEl.textContent = "Неправильна клавіша";
    }
});

document.addEventListener('keypress', function(event) {
    event.preventDefault();
});

btnEl.addEventListener('click', function() {
    currentKeyIndex = 0;
    setCurrentKey();
    statusEl.textContent = "Нова гра почалась";
});
setCurrentKey();