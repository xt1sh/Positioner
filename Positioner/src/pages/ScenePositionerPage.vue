<template>
  <q-page
    class="flex q-pa-lg"
    style="background-color: gainsboro; height: 50vh"
  >
    <div
      class="flex column rounded-borders shadow-6 fit q-pa-md q-gutter-y-md"
      style="background-color: white"
    >
      <div class="col-auto">
        <CanvasInputComponent />
      </div>
      <div class="col-auto">
        <ImageInputComponent />
      </div>
      <div class="col-auto">
        <CameraInputComponent />
      </div>
      <div class="col flex fit row wrap q-gutter-x-md">
        <div class="col-8">
          <CanvasComponent />
        </div>
        <div class="col" style="max-height: inherit; overflow-y: scroll;">
          <ImagesDataComponent />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CameraInputComponent from "src/components/CameraInputComponent.vue";
import CanvasComponent from "src/components/CanvasComponent.vue";
import CanvasInputComponent from "src/components/CanvasInputComponent.vue";
import ImageInputComponent from "src/components/ImageInputComponent.vue";
import ImagesDataComponent from "src/components/ImagesDataComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: { CanvasComponent, CanvasInputComponent, ImageInputComponent, ImagesDataComponent, CameraInputComponent },
});
</script>
