import { Canvas } from "@react-three/fiber";
import { Observer, useLocalStore } from "mobx-react";
import Stores from "src/store";
import House from "../../components/house";
import MaskLine from "../../components/maskLine";
import "./index.style.scss";

const Main = () => {
  const localStore = useLocalStore(() => Stores);

  return (
    <Observer>
      {() => {
        return (
          <Canvas
            className="layout-all"
            camera={{ position: localStore.cameraStore.cameraPosition }}
          >
            <ambientLight />
            <pointLight position={[0, 1000, 1000]} />
            <House position={[5, 0, 5]} size={[10, 10, 10]} />
            <House position={[60, 0, 5]} size={[10, 20, 10]} />
            <MaskLine />
          </Canvas>
        );
      }}
    </Observer>
  );
};

export default Main;
