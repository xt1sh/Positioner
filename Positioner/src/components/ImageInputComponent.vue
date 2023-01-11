<template>
  <q-file
    @update:model-value="onFileChange"
    filled
    v-model="model"
    accept="image/*"
    label="Upload image"
  >
    <template v-slot:prepend>
      <q-icon name="cloud_upload" @click.stop.prevent />
    </template>
  </q-file>
</template>

<script setup>
import { ref } from "vue";
import { useInputStore } from "../stores/input-store";

const inputStore = useInputStore();

const model = ref();

const onFileChange = (file) => {
  inputStore.imageSrc = URL.createObjectURL(file);
};
</script>
