<template>
  <div class="row q-gutter-x-md">
    <div class="col-auto">
      <q-input
        v-model.number="canvasInput.width"
        type="number"
        filled
        style="max-width: 200px"
        hint="Scene width"
      />
    </div>

    <div class="col-auto">
      <q-input
        v-model.number="canvasInput.height"
        type="number"
        filled
        style="max-width: 200px"
        hint="Scene height"
      />
    </div>

    <div class="col-auto">
      <q-input
        v-model.number="startPosition.z"
        type="number"
        filled
        style="max-width: 200px"
        hint="Start Z"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCameraStore } from "src/stores/camera-store";
import { useInputStore } from "src/stores/input-store";
import { watch, watchEffect } from "vue";

const inputStore = useInputStore();
const cameraStore = useCameraStore()

const { canvasInput } = storeToRefs(inputStore)
const { startPosition } = storeToRefs(cameraStore)

</script>
