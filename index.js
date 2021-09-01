const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];


// Получаю доступ к элементам BUTTON и BODY
const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');



// Вешаю слушателя на кнопки 
buttonStart.addEventListener('click', start);
    

// // Создаю функцию генерации рандомного цвета
const randomIntegerFromInterval = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)]
}

// Создаю функцию интервал с которым будет меняться цвет фона и присваиваю BODY инлайновый стиль
function start () {
    const timerId = setInterval(() => {
        body.style.backgroundColor = randomIntegerFromInterval(colors);
        console.log('switch');
    }, 1000)
    return timerId;
};
const id = timerId;
// Создаю функцию, которая останавливает генерацию рандомного цвета
function stop () {
    clearInterval(id);
    console.log(clearInterval);
};
    












