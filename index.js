const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

// console.log(randomIntegerFromInterval(0, colors.length));

const buttonStart = document.querySelector('[data-action="start"]');
// console.log(buttonStart);
const buttonStop = document.querySelector('[data-action="stop"]');
// console.log(buttonStop);
const body = document.querySelector('body');
// console.log(body);
const randomIntegerFromInterval = colors[Math.floor(Math.random() * colors.length)];
console.log(randomIntegerFromInterval);
buttonStart.addEventListener('click', generateRandomColor);
let timeId;
function generateRandomColor(colors) {
   
    setInterval(() => {
            body.style.backgroundColor = randomIntegerFromInterval;
            console.log('switch')
      }, 1000)
    console.log(timerId);    
};



buttonStop.addEventListener('click', () => {
    clearInterval(timerId);
    console.log(clearInterval);
});


