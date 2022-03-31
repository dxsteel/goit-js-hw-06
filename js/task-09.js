const refs = {
  body: document.body,
  changeColorButton: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
};

refs.changeColorButton.addEventListener('click', changeBodyBackgroundColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyBackgroundColor() {
  let color = getRandomHexColor()

  refs.body.style.backgroundColor = color;
  refs.colorValue.textContent = color;
}