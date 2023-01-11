<template>
  <q-page
    class="flex q-pa-lg"
    style="background-color: gainsboro; height: 50vh"
  >
    <div
      class="flex column rounded-borders shadow-6 fit q-pa-md q-gutter-md"
      style="background-color: white"
    >
      <div class="col-auto">
        <CanvasInputComponent />
      </div>
      <div class="col flex fit row wrap q-gutter-x-md">
        <div class="col-9">
          <CanvasComponent />
        </div>
        <div class="col-2">
          <ImageInputComponent />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CanvasComponent from "src/components/CanvasComponent.vue";
import CanvasInputComponent from "src/components/CanvasInputComponent.vue";
import ImageInputComponent from "src/components/ImageInputComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: { CanvasComponent, CanvasInputComponent, ImageInputComponent },
});
</script>
