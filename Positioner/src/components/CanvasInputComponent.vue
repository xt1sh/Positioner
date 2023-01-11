<template>
  <div class="row q-gutter-x-md">
    <div class="col-auto">
      <q-input
        @update:model-value="onChange"
        v-model.number="input.width"
        type="number"
        filled
        style="max-width: 200px"
        hint="Scene width"
      />
    </div>

    <div class="col-auto">
      <q-input
        @update:model-value="onChange"
        v-model.number="input.height"
        type="number"
        filled
        style="max-width: 200px"
        hint="Scene height"
      />
    </div>

    <div class="col-auto">
      <q-input
        @update:model-value="onChange"
        v-model.number="input.startZ"
        type="number"
        filled
        style="max-width: 200px"
        hint="Start Z"
      />
    </div>
  </div>
</template>

<script setup>
import { useInputStore } from "src/stores/input-store";

const inputStore = useInputStore();

const input = inputStore.canvasInput;

const onChange = () => (inputStore.canvasInput = Object.assign({}, input));
</script>
