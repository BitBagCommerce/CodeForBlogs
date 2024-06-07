<script setup lang="ts">
import type { Product } from '../components/Product.vue';

type ProductResponse = {
  'hydra:member': Product[];
  'hydra:totalItems': number;
};

const ITEMS_PER_PAGE = 18;

const page = ref(1);
const { data: productResponse, pending: loading } =
  await useApiFetch<ProductResponse>('/products', {
    query: {
      itemsPerPage: ITEMS_PER_PAGE,
      page,
    },
    watch: [page],
  });

const products = computed(() => productResponse.value?.['hydra:member']);
const totalItems = computed(() => productResponse.value?.['hydra:totalItems']);
</script>

<template>
  <div class="products-page">
    <div class="products">
      <Loader :loading>
        <Product
          v-for="{ id, name, images, code } in products"
          :key="id"
          :id
          :code
          :name
          :images
        />
      </Loader>
    </div>

    <Pagination
      v-if="totalItems"
      :items-per-page="ITEMS_PER_PAGE"
      :total-items
      @change="page = $event"
    />
  </div>
</template>

<style scoped>
.products-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.products {
  min-height: 556px;
  margin-inline: auto;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
