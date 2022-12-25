let counterValue = 0;

const counter = document.querySelector("#value");
const plusButton = document.querySelector('button[data-action="increment"]');
const minusButton = document.querySelector('button[data-action="decrement"]');

plusButton.addEventListener("click", () => {
  counter.textContent = ++counterValue;
});
minusButton.addEventListener("click", () => {
  counter.textContent = --counterValue;
});
