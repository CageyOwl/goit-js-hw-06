const inp = document.querySelector('#validation-input');

inp.addEventListener('blur', () => {
  if (inp.value.length === parseInt(inp.dataset.length)) {
    inp.classList.add('valid');
    inp.classList.remove('invalid');
  } else {
    inp.classList.add('invalid');
    inp.classList.remove('valid');
  }
});
