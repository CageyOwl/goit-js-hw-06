const categories = document.querySelector("#categories");

console.log(`Number of categories: ${categories.children.length}`);

for (let subcategory of categories.children) {
  console.log(
    `Category: ${subcategory.querySelector("h2").textContent}` +
      "\n" +
      `Elements: ${subcategory.querySelector("ul").children.length}`
  );
}
