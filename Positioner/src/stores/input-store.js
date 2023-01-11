import { defineStore } from "pinia";
import { ref } from "vue";

export const useInputStore = defineStore("input", () => {
  const canvasInput = ref({ width: 800, height: 600, startZ: 1 });

  const imageSrc = ref();

  return { canvasInput, imageSrc };
});
