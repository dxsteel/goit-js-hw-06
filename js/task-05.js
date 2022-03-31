
let inputElem = document.querySelector('#name-input');
inputElem.addEventListener('input', onInputChange);

let outputElem = document.querySelector('#name-output');

function onInputChange(event) {
  inputElem = event.currentTarget.value;

  inputElem !== ' ' ? (outputElem.innerText = inputElem.trim()) : 'Anonymous';
}