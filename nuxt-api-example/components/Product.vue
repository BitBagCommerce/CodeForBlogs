<script setup lang="ts">
type Image = { path: string };

export type Product = {
  id: number;
  code: string;
  name: string;
  images: Image[];
};

const { name, images, code } = defineProps<Product>();
const coverImage = computed(() => images.at(0)?.path);
</script>

<template>
  <NuxtLink :to="`/products/${code}`" class="product">
    <img :src="coverImage" :alt="name" />

    <p>{{ name }}</p>
  </NuxtLink>
</template>

<style scoped>
.product {
  height: 270px;
  width: 12rem;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 0.5rem;
  overflow-wrap: break-word;
}

.product > img {
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
}
</style>
