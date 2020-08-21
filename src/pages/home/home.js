import React from "react";
import MapTiles from "../../components/map/map";
import NavBar from "../../components/navbar/navbar";
import { SidenavProvider } from "../../contexts/sidenavContext";
import { FarmsProvider } from "../../contexts/farmsContext";
import { DrawProvider } from "../../contexts/drawContext";

const Home = () => {
  return (
    <div>
      <DrawProvider>
        <SidenavProvider>
          <FarmsProvider>
            <NavBar />
            <MapTiles />
          </FarmsProvider>
        </SidenavProvider>
      </DrawProvider>
    </div>
  );
};

export default Home;
