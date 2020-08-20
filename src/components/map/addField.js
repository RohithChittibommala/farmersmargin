export function getGeoPoints(data) {
  console.log(data);
  let points = data.map((obj) => [obj.lat, obj.lng]);
  return points;
}

export function addField(fieldData) {
  console.log(fieldData);
  const body = JSON.stringify(fieldData);
  fetch("http://localhost:5500/fields", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
