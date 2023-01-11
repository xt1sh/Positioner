import { MIN_CANVAS_PADDING } from "src/constants";

const getMultiplier = (canvasDimension, sceneDimension) =>
  (canvasDimension - MIN_CANVAS_PADDING * 2) / sceneDimension;

export const getSceneMultiplier = (canvasDimensions, sceneDimensions) =>
  Math.min(
    getMultiplier(canvasDimensions.width, sceneDimensions.width),
    getMultiplier(canvasDimensions.height, sceneDimensions.height)
  );
