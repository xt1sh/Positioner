<template>
  <div class="fit column wrap q-gutter-y-md q-mb-md q-pl-sm">
    <div class="fit row wrap q-gutter-x-sm">
      <q-btn @click="onUpClick" round dense icon="expand_less" :disabled="isFirst" />
      <q-btn @click="onDownClick" round dense icon="expand_more" :disabled="isLast" />
      <p class="text-h6 q-mb-none">
        {{ image.name }}
      </p>
    </div>
    <div class="fit row q-gutter-x-sm">
      <q-input v-model.number="image.width" type="number" filled dense style="max-width: 100px" hint="Width" readonly />
      <q-input v-model.number="image.height" type="number" filled dense style="max-width: 100px" hint="Height" readonly />
    </div>
    <div class="fit row q-gutter-x-sm">
      <q-input v-model.number="image.x" type="number" filled dense style="max-width: 100px" hint="X" readonly />
      <q-input v-model.number="image.y" type="number" filled dense style="max-width: 100px" hint="Y" readonly />
    </div>
  </div>
</template>

<script setup>
import { useImagesStore } from 'src/stores/images-store';
import { reactive, watch, computed } from 'vue';
import move from 'lodash-move'

console.log(props.inputImage.value)

const imagesStore = useImagesStore()

const emit = defineEmits(['update:image'])
const props = defineProps(['inputImage'])

const image = reactive(props.inputImage)

const isFirst = computed(() => imagesStore.images[0] === props.inputImage)
const isLast = computed(() => imagesStore.images[imagesStore.images.length - 1] === props.inputImage)

console.log(isFirst.value, isLast.value)

watch(image, () => emit('update:image', image))

const onUpClick = () => {
  if (isFirst.value) return
  image.value.bringForward(false)
  const imageIndex = imagesStore.images.findIndex(i => i === props.inputImage)
  imagesStore.images = move(imagesStore.images, imageIndex, imageIndex - 1)
  console.log(imagesStore.images)
}

const onDownClick = () => {
  if (isLast.value) return
  image.value.sendBackwards(false)
  const imageIndex = imagesStore.images.findIndex(i => i === props.inputImage)
  imagesStore.images = move(imagesStore.images, imageIndex, imageIndex + 1)
}

</script>
