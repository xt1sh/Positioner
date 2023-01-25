import { defineStore } from "pinia";
import { ref } from "vue";

export const useInputStore = defineStore("input", () => {
  const canvasInput = ref({ width: 800, height: 600 });

  const image = ref();

  return { canvasInput, image };
});
