
const input = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

input.addEventListener('input', onInputChange)

function onInputChange() {
  if (input.value === '') {
    outputElem.textContent = 'Anonymous';
  } else {
    outputElem.textContent = input.value;
  }
}