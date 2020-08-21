import React, { useEffect, useContext } from "react";
import L from "leaflet";
import "./map.scss";
import "leaflet-draw/dist/leaflet.draw-src.css";
import { FarmsContext } from "../../contexts/farmsContext";
import draw from "./draw";
import layer from "./binglayer";
import { getFields } from "./showFields";
import AddFieldButton from "../field/field";
import { DrawContext } from "../../contexts/drawContext";

const MapTiles = () => {
  const [farms, setFarms] = useContext(FarmsContext);
  const [drawField, setdrawField] = useContext(DrawContext);
  useEffect(() => {
    var map = new L.Map(document.getElementById("map-container"), {
      layers: [layer],
      center: new L.LatLng(11.1168, 79.4598),
      zoom: 20,
      zoomControl: false,
    });

    L.marker([11.1168, 79.4598]).addTo(map);
    var editableLayers = new L.FeatureGroup();
    getFields(map);
    map.addLayer(editableLayers);
    // if (drawField) {
    //   var polygonDrawer = new L.Draw.Polyline(map);
    //   polygonDrawer.enable();
    // }
    // draw(map, editableLayers);
  }, []);
  return (
    <div id="map-container">
      <AddFieldButton draw={draw} />
    </div>
  );
};

export default MapTiles;
