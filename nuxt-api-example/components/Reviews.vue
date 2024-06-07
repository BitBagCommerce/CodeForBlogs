<script setup lang="ts">
const { product } = defineProps<{ product: string }>();

const form = reactive({
  email: '',
  title: '',
  rating: 1,
  comment: '',
});
const body = computed(() => ({ ...form, product }));

const {
  execute: addReview,
  status,
  error,
} = useApiFetch('/product-reviews', {
  body,
  watch: false,
  method: 'post',
  immediate: false,
});
</script>

<template>
  <span class="title">Add review form</span>

  <form
    @submit.prevent="() => addReview()"
    class="form"
    :class="{ loading: status === 'pending' }"
  >
    <UiInput
      v-for="(_, key) in form"
      v-model="form[key]"
      :key="`input-${key}`"
      :label="key"
      :="key === 'rating' && { type: 'number', min: 1, max: 5 }"
    />

    <button>add review</button>

    <p v-if="status === 'error'" class="error">{{ error?.data.detail }}</p>
    <p v-if="status === 'success'" class="success">
      review was added successfully
    </p>
  </form>
</template>

<style scoped>
.title {
  font-size: 1.25rem;
  font-weight: 600;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: opacity 0.15s ease;
}

.form > button {
  margin-top: 1.5rem;
}

.form.loading {
  opacity: 0.4;
  pointer-events: none;
}

.error {
  color: red;
  white-space: pre;
}

.success {
  color: green;
}
</style>
