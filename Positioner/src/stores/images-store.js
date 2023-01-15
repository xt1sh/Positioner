import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useImagesStore = defineStore("images", () => {
  const images = reactive([])

  return { images };
});
