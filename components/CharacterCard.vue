<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="w-52 h-52 rounded-lg bg-red-300 m-5">
    <NuxtImg class="rounded-lg" :src="image" format="webp"/>
    <h2 class=" text-2xl text-center font-extrabold mt-2">{{ name }}</h2>
  </div>
</template>