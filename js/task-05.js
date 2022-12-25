const inp = document.querySelector("#name-input");

inp.addEventListener("input", () => {
  const value = inp.value.trim();
  document.querySelector("#name-output").textContent = value
    ? value
    : "Anonymous";
});
