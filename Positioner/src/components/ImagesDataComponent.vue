<template>
    <div v-for="image in images" :key="image.canvasId">
      <ImageDataComponent :inputImage="image" @update:image="onImageUpdate" />
    </div>
</template>

<script setup>
import { useImagesStore } from 'src/stores/images-store';
import { storeToRefs } from 'pinia'
import ImageDataComponent from './ImageDataComponent.vue';
import { watch } from 'vue';

const imagesStore = useImagesStore()
var images = imagesStore.images

imagesStore.$subscribe(() => images = imagesStore.images)

const onImageUpdate = (data) => {
  const index = imagesStore.images.findIndex(i => i.canvasId === data.canvasId)
  imagesStore.images[index] = data
}

</script>
