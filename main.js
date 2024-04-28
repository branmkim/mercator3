import L from 'leaflet';
import 'leaflet-truesize';
import usa from './geometry/usa.json'
import france from './geometry/france.json'
import australia from './geometry/australia.json'
import greenland from './geometry/greenland.json'
import brazil from './geometry/brazil.json'

// create leaflet map ...
var map = L.map('map').setView([0, 0], 1.5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const selectToJson = {
    "australia": australia,
    "brazil": brazil,
    "france": france,
    "greenland": greenland,
    "usa": usa
}
let layers = {}

// Cycle through each country in selectToJson
for (let country in selectToJson) {
    // Get the GeoJSON feature for the country
    let geojsonFeature = {
        type: 'Feature',
        properties: {},
        geometry: selectToJson[country].geometry
    };
    // Create a TrueSizeLayer for the country and add it to the map
    layers[country] = new L.TrueSize(geojsonFeature, {
        color: '#0000FF',
        weight: 1,
        opacity: 1,
    }).addTo(map);
}

function showCountry(country) {
    // Hide all layers
    for (let layer in layers) {
        if (map.hasLayer(layers[layer])) {
            map.removeLayer(layers[layer]);
        }
    }
    // Show the selected layer
    layers[country].addTo(map);
}

let select = document.getElementById("select");
showCountry(select.value);
select.addEventListener("change", function () {
    showCountry(select.value);
})