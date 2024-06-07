<script setup lang="ts">
const { loading } = defineProps<{ loading: boolean }>();
</script>

<template>
  <span v-if="loading">Loading...</span>

  <slot v-else />
</template>
