import { defineStore } from "pinia";
import { ref } from "vue";

export const useCanvasStore = defineStore("canvas", () => {
  const dimensionsMultiplier = ref(1);

  return { dimensionsMultiplier };
});
