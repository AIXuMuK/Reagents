let clicks = 0;

const TIMEOUT = 5000;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
const restartBtn = document.querySelector('#restartBtn');
const newBtn = document.createElement('button');

button.onclick = start;

function start() {
    const startTime = Date.now();

    display.textContent = formatTime(TIMEOUT);

    button.onclick = () => counter.textContent = ++clicks;

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'Game Over';
        
        restartBtn.appendChild(newBtn);
        newBtn.textContent = "Restart?";
        newBtn.addEventListener('click', function() {
            button.onclick = start;
            display.textContent = '';
            counter.textContent = '';
            clicks = 0;
            newBtn.remove();
        });
        
        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT);
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}




