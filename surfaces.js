import { Surface } from "react-360-web";

export function createSurface(size, yaw = 0, pitch = 0) {
  const SIZE = size;
  const newSurface = new Surface(SIZE, SIZE, Surface.SurfaceShape.Flat);
  newSurface.setAngle(yaw, pitch);
  return newSurface;
}
