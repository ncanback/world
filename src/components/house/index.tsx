import * as THREE from "three";
import { useRef } from "react";
import { Position, Size } from "../../type";
import { getRealCompPositionXZ } from "../../common";

const House = (props: { position: Position; size: Size }) => {
  const { position, size } = props;
  const realPosition = getRealCompPositionXZ(position, size);
  const mesh = useRef<THREE.Mesh>(null!);
  return (
    <mesh position={realPosition} ref={mesh}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

export default House;
