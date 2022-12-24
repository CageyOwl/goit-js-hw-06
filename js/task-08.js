const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const values = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  if (!(values.email && values.password)) {
    alert("All fields are required");
  } else {
    console.log(values);
    form.reset();
  }
});
