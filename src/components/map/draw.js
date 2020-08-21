import "leaflet-draw";
import L from "leaflet";
import { addField } from "./addField";
import { getGeoPoints } from "./addField";

export default function draw(map, editableLayers) {
  console.log("draw");
  var drawPluginOptions = {
    position: "bottomright",
    draw: {
      polygon: {
        allowIntersection: false, // Restricts shapes to simple polygons
        drawError: {
          color: "#e1e100", // Color the shape will turn when intersects
          message: "<strong>Oh snap!<strong> you can't draw that!", // Message that will show when intersect
        },
        shapeOptions: {
          color: "#97009c",
        },
      },
      // disable toolbar item by setting it to false
      polyline: false,
      circle: false, // Turns off this drawing tool
      rectangle: false,
      marker: false,
    },
    edit: {
      featureGroup: editableLayers, //REQUIRED!!
      remove: false,
    },
  };

  var drawControl = new L.Control.Draw(drawPluginOptions);
  // map.addControl(drawControl);
  var polygonDrawer = new L.Draw.Polyline(map);
  polygonDrawer.enable();
  map.on("draw:created", function (e) {
    var type = e.layerType,
      layer = e.layer;
    if (type === "marker") {
      layer.bindPopup("A popup!");
    }
    console.log(layer);
    const data = {
      location: {
        type: "Polygon",
        coordinates: [getGeoPoints(layer._latlngs[0])],
      },
      color: "yellow",
      crop: "paddy",
      farm: "dhanasekar farms",
      username: "dhanasekar",
    };
    editableLayers.addLayer(layer);
    addField(data);
  });
}
