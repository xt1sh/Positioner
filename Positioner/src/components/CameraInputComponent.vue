<template>
  <div class="row q-gutter-x-md">
    <div class="col-auto" style="width: 500px">
      <q-badge color="secondary">
        Camera X: {{ cameraPosition.x }} (-15000 to 15000)
      </q-badge>
      <q-slider v-model="cameraPosition.x" :min="-15000" :max="15000" :step="1" />
    </div>
  </div>
  <div class="row q-gutter-x-md">
    <div class="col-auto" style="width: 500px">
      <q-badge color="secondary">
        Camera Y: {{ cameraPosition.y }} (-15000 to 15000)
      </q-badge>
      <q-slider v-model="cameraPosition.y" :min="-15000" :max="15000" :step="1" />
    </div>
  </div>
  <div class="row q-gutter-x-md">
    <div class="col-auto" style="width: 500px">
      <q-badge color="secondary">
        Camera Z: {{ cameraPosition.z }} (-15 to 15)
      </q-badge>
      <q-slider v-model="cameraPosition.z" :min="-15" :max="15" :step="0.1" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCameraStore } from "src/stores/camera-store";

const cameraStore = useCameraStore();

const { cameraPosition } = storeToRefs(cameraStore)
</script>
