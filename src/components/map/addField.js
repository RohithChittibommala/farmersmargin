export function getGeoPoints(data) {
  console.log(data);

  const stratingPoint = data[0];
  let points = data.map((obj) => [obj.lat, obj.lng]);
  points.push([stratingPoint.lat, stratingPoint.lng]);
  console.log(points);
  return points;
}

export function addField(fieldData) {
  fetch("http://localhost:5500/fields", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fieldData),
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
