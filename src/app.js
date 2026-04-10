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
            statusEl.textContent = success({text: 'Ви перемогли', delay: 1000});

            currentKeyIndex = 0;
        } else {
            statusEl.textContent = success({text: 'Правильно', delay: 250});
        }
        setCurrentKey();
    } else {
        statusEl.textContent = alert({text: 'Неправильна клавіша', delay: 250});
    }
});

document.addEventListener('keypress', function(event) {
    event.preventDefault();
});

btnEl.addEventListener('click', function() {
    currentKeyIndex = 0;
    setCurrentKey();
    statusEl.textContent = notice({text: 'Нова гра почалась', delay: 1000});
});
setCurrentKey();

// =============================================================================

import Chart from 'chart.js/auto';
const ctx = document.getElementById('sales-chart');

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const config = {
  type: 'line',
  data: chartData,
  options: {}
};

const salesChart = new Chart(ctx, config);