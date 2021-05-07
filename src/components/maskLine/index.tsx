import * as THREE from "three";
import {} from "@react-three/fiber";
import { useRef } from "react";
import { Position } from "../../type";

const Line = (props: { startP: Position; endP: Position }) => {
  const { startP, endP } = props;
  const lineSegments = useRef<THREE.LineSegments>(null!);
  const points: any = [];
  const [sx, sy, sz] = startP;
  const [ex, ey, ez] = endP;
  points.push(new THREE.Vector3(sx, sy, sz));
  points.push(new THREE.Vector3(ex, ey, ez));
  console.log("points", points);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <lineSegments ref={lineSegments}>
      <edgesGeometry attach="geometry" args={[lineGeometry]} />
      <lineBasicMaterial color={"red"} linewidth={1} />
    </lineSegments>
  );
};
const MaskLine = () => {
  return (
    <>
      <Line startP={[0, 0, 0]} endP={[0, 0, 100]} />
      <Line startP={[0, 0, 0]} endP={[0, 100, 0]} />
      <Line startP={[0, 0, 0]} endP={[100, 0, 0]} />
    </>
  );
};

export default MaskLine;
