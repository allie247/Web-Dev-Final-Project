
const form = document.getElementById("myForm"); 
const submitButton = form.querySelector('input[type="submit"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form); 
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  sessionStorage.setItem("formData", JSON.stringify(data));

  submitButton.value = "Thank you for your request! We will get back to you shortly."
});