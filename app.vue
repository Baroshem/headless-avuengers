<script setup lang="ts">
// const result = ref({ hits: [] })
const { result, search } = useAlgoliaSearch('avuengers')
// const story = ref({ content: { body: [] } })
const story = await useAsyncStoryblok('avuengers', { version: 'draft' })

const isThanosDefeated = ref(false)

const defeatThanos = () => {
  isThanosDefeated.value = true
}

onMounted(async () => {
  await search({ query: '' })
})
</script>

<template>
  <div>
    <div class="flex justify-center">
      <div>
        <Transition>
          <CharacterCard
            v-if="!isThanosDefeated"
            name="Thanos"
            image="/thanos.jpeg"
          />
        </Transition>
        <button
          @click="defeatThanos"
          :disabled="!(result?.hits?.length === 3 && story?.content?.body?.length === 3)"
          class="rounded-sm p-3 mx-14 border border-gray-800"
          :class="!(result?.hits?.length === 3 && story?.content?.body?.length === 3) ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-400'"
        >Defeat Thanos</button> 
      </div>
    </div>
    <div class="flex justify-center">
      <CharacterCard
        v-editable
        v-for="character in story?.content?.body"
        :key="character.id"
        :name="character.name"
        :image="character.image.filename"
      />
    </div>
    <div class="flex justify-center">
      <CharacterCard
        v-for="character in result?.hits"
        :key="character.id"
        :name="character.name"
        :image="character.image"
      />
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>