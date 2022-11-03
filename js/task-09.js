function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');

button.addEventListener('click', changeColor);

function changeColor(event) { 
  let color = getRandomHexColor();
  body.style.background = color;
  spanColor.textContent = color;
}