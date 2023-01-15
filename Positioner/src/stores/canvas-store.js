import { defineStore } from "pinia";
import { ref } from "vue";

export const useCanvasStore = defineStore("canvas", () => {
  const dimensionsMultiplier = ref(1);

  const getCanvasDimension = (dimension) => dimension * dimensionsMultiplier.value
  const getFromCanvasDimension = (dimension) => Math.round(dimension / dimensionsMultiplier.value)

  return { dimensionsMultiplier, getCanvasDimension, getFromCanvasDimension };
});
