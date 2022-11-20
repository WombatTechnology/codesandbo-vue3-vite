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

const dragFromIndex = ref<number | null>(null)
const saveFromIndex = (fromIndex: number) => {
  dragFromIndex.value = fromIndex
}

const moveItem = (targetIndex: number) => {
  if (dragFromIndex.value === null) return
  data.items = moveIndex(data.items, dragFromIndex.value, targetIndex)
}
</script>

<template>
  <div v-for="(u, i) in data.items">
    <!-- ドロップ要素 -->
    <div class="drop-area" @drop="() => moveItem(i)" @dragover.prevent>
      {{ i }}
    </div>
    <!-- ドラッグ要素 -->
    <span draggable="true" @dragstart="() => saveFromIndex(i)">{{
      u.name
    }}</span>
  </div>
</template>

<style>
.drop-area {
  width: 40px;
  background-color: gray;
  height: 20px;
  color: white;
}
</style>
