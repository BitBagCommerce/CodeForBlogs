<script setup lang="ts">
type Image = { path: string };

type Product = {
  code: string;
  name: string;
  description: string;
  images: Image[];
  averageRating: number;
};

const route = useRoute();

const code = computed(() => route.params.code);
const { data: product } = await useApiFetch<Product>(
  () => `/products/${code.value}`
);

const coverImage = computed(() => product.value?.images.at(0)?.path);
const stars = computed(() =>
  Array.from({ length: 5 }, (_, i) => ({
    key: `star-${i}`,
    filled: i + 1 <= (product.value?.averageRating ?? 0),
  }))
);
</script>

<template>
  <div v-if="product" class="product">
    <img :src="coverImage" :alt="product?.name" />

    <div class="content">
      <span class="name">{{ product?.name }}</span>

      <div>
        <span
          v-for="{ key, filled } in stars"
          :key
          class="star"
          :class="{ filled }"
        >
          ⭐
        </span>
      </div>

      <p class="description">{{ product?.description }}</p>

      <Reviews :product="product?.code" />
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  gap: 2rem;
  font-size: 1.25rem;
}

.product > img {
  width: 40%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 1rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.name {
  font-size: 2rem;
  font-weight: bold;
}

.star {
  filter: saturate(0);
}

.star.filled {
  filter: none;
}
</style>
