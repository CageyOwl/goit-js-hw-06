const inp = document.querySelector("#name-input");

inp.addEventListener(
  "input",
  () =>
    (document.querySelector("#name-output").textContent = inp.value
      ? inp.value
      : "Anonymous")
);
