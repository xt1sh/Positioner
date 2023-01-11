import { defineStore } from "pinia";
import { ref } from "vue";

export const useInputStore = defineStore("input", () => {
  const sceneWidth = ref(800)
  const sceneHeight = ref(600)
  const startZ = ref(1)
  const canvasInput = ref({ width: 800, height: 600, startZ: 1 });

  const imageSrc = ref();

  return { canvasInput, sceneWidth, sceneHeight, startZ, imageSrc };
});
