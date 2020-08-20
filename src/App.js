import React from "react";
import MapTiles from "./components/map/map";
import NavBar from "./components/navbar/navbar";
import { SidenavProvider } from "./contexts/sidenavContext";
import { FarmsProvider } from "./contexts/farmsContext";
import "./App.scss";
const App = () => {
  return (
    <div>
      <SidenavProvider>
        <FarmsProvider>
          <NavBar />
          <MapTiles />
        </FarmsProvider>
      </SidenavProvider>
    </div>
  );
};

export default App;
