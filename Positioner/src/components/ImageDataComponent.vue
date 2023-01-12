<template>
  <div class="fit column wrap q-gutter-y-md q-mb-md q-pl-sm">
    <div class="fit row wrap q-gutter-x-sm">
      <q-btn round dense icon="expand_less" />
      <q-btn round dense icon="expand_more" />
      <p class="text-h6 q-mb-none">
        {{ image.name }}
      </p>
    </div>
    <q-input v-model.number="image.width" type="number" filled dense style="max-width: 200px" hint="Scene width" />
    <q-input v-model.number="image.height" type="number" filled dense style="max-width: 200px" hint="Scene height" />
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';

const emit = defineEmits(['update:image'])
const props = defineProps(['inputImage'])

const image = reactive(props.inputImage)


watch(image, () => emit('update:image', image))
</script>
