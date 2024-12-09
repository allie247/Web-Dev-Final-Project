//chatgpt for map
// Initialize the map and center it on Burlington, VT
const map = L.map('map').setView([44.4759, -73.2121], 13); // Burlington coordinates with zoom level 13

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  maxZoom: 19,
}).addTo(map);
// Add a marker for downtown Burlington
const marker = L.marker([44.4759, -73.2121]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Downtown Burlington</b><br>Welcome to Burlington, VT!").openPopup();

// Add a circle around downtown
L.circle([44.4759, -73.2121], {
  color: 'blue',
  fillColor: '#30f',
  fillOpacity: 0.4,
  radius: 1000, // Radius in meters
}).addTo(map);


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