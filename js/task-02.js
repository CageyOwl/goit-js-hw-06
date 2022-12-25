const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// The code starts here

const ingredientsUL = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((i) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add("item");
  ingredientsItem.textContent = i;
  return ingredientsItem;
});

ingredientsUL.append(...ingredientsItems);