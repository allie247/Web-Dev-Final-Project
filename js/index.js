
window.onload = function displayMap() {
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

  // Add a search bar using Leaflet Control Geocoder
  L.Control.geocoder({
    defaultMarkGeocode: false,
    collapsed: false, // Keeps the search bar expanded
  }).on('markgeocode', function (e) {
    const bbox = e.geocode.bbox;
    const poly = L.polygon([
      [bbox.getSouthEast().lat, bbox.getSouthEast().lng],
      [bbox.getNorthEast().lat, bbox.getNorthEast().lng],
      [bbox.getNorthWest().lat, bbox.getNorthWest().lng],
      [bbox.getSouthWest().lat, bbox.getSouthWest().lng]
    ]).addTo(map);

    // Center the map on the selected location
    map.fitBounds(poly.getBounds());

    // Add a marker at the searched location
    L.marker(e.geocode.center).addTo(map)
      .bindPopup(`<b>${e.geocode.name}</b>`)
      .openPopup();
  }).addTo(map);
};

const form = document.getElementById("myForm"); 
const submitButton = form.querySelector('input[type="submit"]');

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form); 
      const data = {};
      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }
      let answersList = JSON.parse(localStorage.getItem("formAnswersList")) || [];
      answersList.push(data);
      localStorage.setItem("formAnswersList", JSON.stringify(answersList));

      submitButton.value = "Thank you for your request! We will get back to you shortly."
      event.target.reset();
  }
);