function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// The code starts here

const colorCode = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', () => {
  colorCode.textContent = getRandomHexColor();
  document.body.style.backgroundColor = `${colorCode.textContent}`;
});
