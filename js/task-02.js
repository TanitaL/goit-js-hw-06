const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientText = function (ingredients) {
  const ingredientsArray = [];
  for (const ingredient of ingredients) {
      const ingredientItem = document.createElement('li');
      ingredientItem.classList.add('item');
      ingredientItem.textContent = `${ingredient}`
    ingredientsArray.push(ingredientItem);
  }
  return ingredientsArray;
};

ingredientsList.append(...ingredientText(ingredients))

