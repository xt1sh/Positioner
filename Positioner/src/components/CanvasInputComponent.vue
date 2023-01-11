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
        v-model.number="canvasInput.startZ"
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
import { useInputStore } from "src/stores/input-store";

const inputStore = useInputStore();

const { canvasInput } = storeToRefs(inputStore)

</script>
