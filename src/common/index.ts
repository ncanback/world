import { Position, Size } from "../type";

export const getRealCompPositionXZ = (position: Position, size: Size) => {
  const result: Position = [0, 0, 0];
  for (let i = 0; i < position.length; i++) {
    if (i === 1) {
      result[i] = position[i];
    } else {
      result[i] = position[i] + size[i] / 2;
    }
  }
  return result;
};
