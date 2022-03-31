function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controls: document.querySelector("#controls"),
  boxes: document.querySelector("#boxes")
}

refs.controls.addEventListener('click', onBtnClick)

function onBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return
  }
    
let numberInput = refs.controls.firstElementChild.value

if (e.target.textContent == "Create") {
  createBoxes(numberInput)
}

else if (e.target.textContent == "Destroy") {
  destroyBoxes(numberInput)
}

 else if ( e.target.textContent == "Destroy-All" ) {
    destroyAllBoxes()
}
  
}

function createBoxes(amount) {
  let addDiv = [];
  let currentDiv = 30
  if (refs.boxes.lastChild) {
    currentDiv = parseInt(refs.boxes.lastChild.style.width)+10
  }

  for (let i = 0; i < amount; i += 1){
    let element = document.createElement('div')
    element.style.width = `${currentDiv}px`
    element.style.height = `${currentDiv}px`
    element.style.backgroundColor = getRandomHexColor()
    addDiv.push(element);
    currentDiv += 10
  }
  refs.boxes.append(...addDiv)
}

function destroyBoxes ( amount ) {
  for ( let d = 0; d < amount; d += 1 ){
      refs.boxes.lastChild.remove()
    }
}

function destroyAllBoxes () {
  refs.boxes.innerHTML = ""
}