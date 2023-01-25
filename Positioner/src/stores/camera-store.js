import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCameraStore = defineStore("camera", () => {
  const cameraPosition = ref({ x: 0, y: 0, z: 1})
  const startPosition = ref({ x: 0, y: 0, z: 1})

  const currentCameraPosition = computed(() => ({ x: cameraPosition.value.x + startPosition.value.x, y: cameraPosition.value.y + startPosition.value.y, z: cameraPosition.value.z + startPosition.value.z }))

  return { cameraPosition, startPosition, currentCameraPosition };
});
