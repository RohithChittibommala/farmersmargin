import L from "leaflet";
export function getFields(map) {
  fetch("http://localhost:5500/fields/11.118338348947281/79.46229279041292")
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      data.data.forEach((field) => {
        L.polygon(field.location.coordinates[0], {
          fillColor: field.color,
          color: field.color,
        }).addTo(map);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
