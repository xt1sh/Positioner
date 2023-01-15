<template>
  <canvas ref="canvasElement"></canvas>
  <h1>

  </h1>
</template>

<script setup>
import { useInputStore } from "src/stores/input-store";
import { useCanvasStore } from "src/stores/canvas-store";
import { useImagesStore } from "src/stores/images-store";
import { ref, onMounted, watch, computed } from "vue";
import { getSceneMultiplier } from "src/helpers/resizer";
import { MIN_CANVAS_PADDING } from "src/constants";

const fabric = require("fabric").fabric;

const inputStore = useInputStore();
const canvasStore = useCanvasStore();
const imagesStore = useImagesStore()

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

  const width = canvasStore.getCanvasDimension(input.width);
  const height = canvasStore.getCanvasDimension(input.height);

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
  () => inputStore.image,
  (inputImage) => {
    if (!inputImage || !canvas) return;

    fabric.Image.fromURL(inputImage.src, (image) => {
      canvas.add(image)

      const storeImage = ref({
        name: inputImage.name, canvasId: image.cacheKey, width: canvasStore.getFromCanvasDimension(image.width), height: canvasStore.getFromCanvasDimension(image.height),
        bringForward: () => image.bringForward(false), sendBackwards: () => image.sendBackwards(false)
      })
      imagesStore.images.unshift(storeImage)

      image.on('moving', e => {
        storeImage.value.x = canvasStore.getFromCanvasDimension(e.transform.target.left - sceneRect.left)
        storeImage.value.y = canvasStore.getFromCanvasDimension(e.transform.target.top - sceneRect.top)
      })
      image.on('scaling', e => {
        storeImage.value.width = canvasStore.getFromCanvasDimension(e.transform.target.width * e.transform.target.scaleX)
        storeImage.value.height = canvasStore.getFromCanvasDimension(e.transform.target.height * e.transform.target.scaleY)
      })

      sceneRect.bringToFront()
    });
  }
);

// imagesStore.$subscribe(() => {
//   console.log('watch')
//   imagesStore.images.forEach(img => {

//     console.log('imagesStore')

//     const imageOnCanvas = canvas._objects.find(obj => obj.cacheKey === img.canvasId)

//     imageOnCanvas.scaleY = canvasStore.getCanvasDimension(img.height) / imageOnCanvas.height
//     imageOnCanvas.scaleX = canvasStore.getCanvasDimension(img.width) / imageOnCanvas.width

//     canvas.requestRenderAll();
//   })
// })

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
