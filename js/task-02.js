const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElem = document.querySelector('#ingredients');

const foodIngredients = ingredients.map(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  list.classList.add('item');
  return list;
});

ulElem.append(...foodIngredients);

