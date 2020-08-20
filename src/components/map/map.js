import React, { useEffect, useContext } from "react";
import L from "leaflet";
import "./map.scss";
import "leaflet-draw/dist/leaflet.draw-src.css";
import { FarmsContext } from "../../contexts/farmsContext";
import draw from "./draw";
import layer from "./binglayer";

const MapTiles = () => {
  const [farms, setFarms] = useContext(FarmsContext);
  useEffect(() => {
    // setting up the map
    var map = new L.Map(document.getElementById("map-container"), {
      layers: [layer],
      center: new L.LatLng(11.1168, 79.4598),
      zoom: 20,
      zoomControl: false,
    });
    // L.control.zoom({ position: "bottomright" }).addTo(map);
    var editableLayers = new L.FeatureGroup();
    map.addLayer(editableLayers);
    draw(map, editableLayers);
  }, []);
  return <div id="map-container"></div>;
};

export default MapTiles;
