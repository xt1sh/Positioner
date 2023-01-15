<template>
    <div v-for="image in images" :key="image">
      <ImageDataComponent :inputImage="image" />
    </div>
</template>

<script setup>
import { useImagesStore } from 'src/stores/images-store';
import { storeToRefs } from 'pinia'
import ImageDataComponent from './ImageDataComponent.vue';
import { watch, computed } from 'vue';

const imagesStore = useImagesStore()
var images = computed(() => imagesStore.images)

watch(images, console.log)

// const onImageUpdate = (data) => {
//   const index = imagesStore.images.findIndex(i => i.canvasId === data.canvasId)
//   imagesStore.images[index] = data
// }

</script>
