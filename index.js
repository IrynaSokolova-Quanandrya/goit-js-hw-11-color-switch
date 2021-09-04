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




// // Создаю функцию генерации рандомного цвета
const randomIntegerFromInterval = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)]
}

// // Создаю функцию интервал с которым будет меняться цвет фона и присваиваю BODY инлайновый стиль
const start = () => {
   const timerID = setInterval(() =>
    body.style.backgroundColor = randomIntegerFromInterval(colors)
    , 1000);
    buttonStart.isActive = true;
    console.log(timerID);
    return timerID;
    
}
const ID = timerID;
console.log(ID);
// // Создаю функцию, которая останавливает генерацию рандомного цвета
const stop = () => {
    clearInterval(ID);
    buttonStart.isActive = false;
    console.log(stop);
}

// Вешаю слушателя на кнопки 
buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', stop);



    





