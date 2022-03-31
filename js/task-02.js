const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElem = document.querySelector('#ingredients');

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

ulElem.innerHTML = list;

