<script setup lang="ts">
const { label } = defineProps<{ label: string }>();
const model = defineModel();
</script>

<template>
  <div class="input">
    <label :for="label">{{ label }}</label>

    <input v-model="model" :id="label" :name="label" :="$attrs" />
  </div>
</template>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.input input {
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
}
</style>
