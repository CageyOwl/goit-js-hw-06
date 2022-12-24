const control = document.querySelector("#font-size-control");

control.addEventListener("input", () => {
  document.querySelector("#text").style.fontSize = `${control.value}px`;
});
