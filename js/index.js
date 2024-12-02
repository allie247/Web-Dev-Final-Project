
const form = document.getElementById("myForm"); 

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form); 
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  sessionStorage.setItem("formData", JSON.stringify(data)); 

});