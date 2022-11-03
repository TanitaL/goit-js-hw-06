let counterValue = 0;
const decrement = document.querySelector("button[data-action='decrement']");
const increment = document.querySelector("button[data-action='increment']");
const value = document.querySelector("#value");

const countDecrement = function() {
  counterValue -= 1;
  value.textContent = counterValue;
};

const countIncrement = function() {
  counterValue += 1;
  value.textContent = counterValue;
};

decrement.addEventListener("click", countDecrement);
increment.addEventListener("click", countIncrement);