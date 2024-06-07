<script setup lang="ts">
type Props = {
  itemsPerPage: number;
  totalItems: number;
};

const { itemsPerPage = 1, totalItems = 1 } = defineProps<Props>();
const emit = defineEmits<{ change: [offset: number] }>();

const pages = computed(() =>
  Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, i) => ({
    key: `page-${i}`,
    number: i + 1,
  }))
);
const page = ref(0);

const changePage = (i: number) => {
  page.value = i;
  emit('change', pages.value[i].number);
};
</script>

<template>
  <div class="pagination">
    <button
      v-for="({ key }, i) in pages"
      :key
      :class="{ active: page === i }"
      @click="changePage(i)"
    >
      {{ i + 1 }}
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  gap: 1rem;
}

.pagination > button {
  width: 4rem;
  font-size: 2rem;
}

.pagination > button.active {
  background-color: black;
  color: white;
}
</style>
