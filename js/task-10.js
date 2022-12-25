function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// The code starts here

function createBoxes(
  amount,
  boxesContainer = document.querySelector('#boxes')
) {
  destroyBoxes();

  const boxesArr = [];
  for (let i = 0, w = 30; i < amount; ++i, w += 10) {
    const box = document.createElement('div');

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = box.style.height = `${w}px`;

    boxesArr.push(box);
  }
  boxesContainer.append(...boxesArr);
}

function destroyBoxes(boxesContainer = document.querySelector('#boxes')) {
  boxesContainer.innerHTML = '';
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', () => {
  createBoxes(document.querySelector('input[type="number"]').value);
});
destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
