import { defineStore } from "pinia";
import { ref } from "vue";

export const useImagesStore = defineStore("images", () => {
  const images = ref([])

  return { images };
});
