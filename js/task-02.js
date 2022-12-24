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

for (let i of ingredients) {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add("item");
  ingredientsItem.textContent = i;

  ingredientsUL.append(ingredientsItem);
}
