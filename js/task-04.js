const button = {
    span: document.querySelector("#value"),
    sub: document.querySelector("[data-action= 'increment']"),
    add: document.querySelector("[data-action= 'decrement']"),
};

let countValue = 0;
const increment = () => {
    countValue += 1;

    button.span.textContent = countValue;
};

const decrement = () => {
    countValue -= 1;

    button.span.textContent = countValue;
};

button.sub.addEventListener("click", increment);
button.add.addEventListener("click", decrement);