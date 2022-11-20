<script setup lang="ts">
import { reactive } from "vue"
const dragStart = (event: any) => {
  console.log("dragEvent", event)
}

const drop = (event: any) => {
  console.log("dropEvent", event)
}
</script>

<template>
  <div class="drop-area" @drop="drop" @dragover.prevent @dragenter.prevent>
    Drop Me
  </div>
  <div class="drag-target" draggable="true" @dragstart="dragStart">Drag Me</div>
</template>

<style scoped></style>
