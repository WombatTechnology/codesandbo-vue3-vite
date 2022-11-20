<script setup lang="ts">
import { reactive, ref } from "vue"
import { moveIndex } from "./moveIndex"
const data = reactive({
  items: [
    {
      name: "太郎",
    },
    {
      name: "花子",
    },
    {
      name: "健太",
    },
    {
      name: "愛",
    },
  ],
})

const fromIndex = ref<number | null>(null)

const startDrag = (index: number) => {
  fromIndex.value = index
}

const drop = (index: number) => {
  if (fromIndex.value === null) return
  data.items = moveIndex(data.items, fromIndex.value, index)
}
</script>

<template>
  <div v-for="(u, i) in data.items">
    <div
      class="drop-area"
      @drop="() => drop(i)"
      @dragover.prevent
      @dragenter.prevent
    >
      dropme
    </div>
    <span draggable="true" @dragstart="() => startDrag(i)">{{ u.name }}</span>
  </div>
</template>
