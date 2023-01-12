import { defineStore } from "pinia";
import { ref } from "vue";

export const useCanvasStore = defineStore("canvas", () => {
  const dimensionsMultiplier = ref(1);

  const getDimension = (dimension) => Math.round(dimension * dimensionsMultiplier.value)
  const getCanvasDimension = (dimension) => dimension / dimensionsMultiplier.value

  return { dimensionsMultiplier, getDimension, getCanvasDimension };
});
