const inputElement = document.getElementById("font-size-control");
const textElement = document.getElementById("text");
inputElement.oninput = function () {
    text.style.fontSize = inputElement.value + "px";
}