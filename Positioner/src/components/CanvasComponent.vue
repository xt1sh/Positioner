<template>
  <canvas ref="canvasElement"></canvas>
</template>

<script setup>
import { useInputStore } from "src/stores/input-store";
import { useCanvasStore } from "src/stores/canvas-store";
import { ref, onMounted, watch } from "vue";
import { getSceneMultiplier } from "src/helpers/resizer";
import { MIN_CANVAS_PADDING } from "src/constants";

const fabric = require("fabric").fabric;

const inputStore = useInputStore();
const canvasStore = useCanvasStore();

const canvasElement = ref();

var canvas;
var canvasDimensions;

var sceneRect;

const setupCanvas = () => {
  if (!canvas) return;

  const input = inputStore.canvasInput

  const multiplier = getSceneMultiplier(canvasDimensions, {
    width: input.width,
    height: input.height,
  });

  canvasStore.dimensionsMultiplier = multiplier;

  const width = input.width * multiplier;
  const height = input.height * multiplier;

  if (sceneRect) canvas.remove(sceneRect);

  sceneRect = new fabric.Rect({
    width: width,
    height: height,
    fill: "rgba(0,0,0,0)",
    stroke: "red",
    strokeWidth: 2,
    selectable: false,
  });

  sceneRect.left = (canvasDimensions.width - width) / 2;
  sceneRect.top = (canvasDimensions.height - height) / 2;

  canvas.add(sceneRect);
};

watch(
  () => inputStore.imageSrc,
  (src) => {
    if (!src || !canvas) return;

    fabric.Image.fromURL(src, (oImg) => canvas.add(oImg));
  }
);

inputStore.$subscribe(setupCanvas)


onMounted(() => {
  canvasDimensions = {
    width: canvasElement.value.parentElement.clientWidth,
    height: canvasElement.value.parentElement.clientHeight,
  };

  canvas = new fabric.Canvas(canvasElement.value, {
    width: canvasDimensions.width,
    height: canvasDimensions.height,
    backgroundColor: "gainsboro",
  });

  setupCanvas();
});
</script>
