<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)
const isRegistered = ref(false)
</script>

<template>
  <div class="container">
    <button @click="isVisible = !isVisible" data-e2e="show-button">show</button>

    <p v-show="isVisible" data-e2e="paragraph">Some sample text 😊</p>
  </div>

  <form @submit.prevent="isRegistered = true">
    <div class="form-field">
      <label for="name">Name</label>

      <input type="text" name="name" id="name" data-e2e="form-name" />
    </div>

    <div class="form-field">
      <label for="last-name">Last name</label>

      <input type="text" name="last-name" id="last-name" data-e2e="form-last-name" />
    </div>

    <div class="form-field">
      <label for="e-mail">E-mail</label>

      <input type="text" name="e-mail" id="e-mail" data-e2e="form-e-mail" />
    </div>

    <div class="form-field">
      <label for="phone-number">Phone number</label>

      <input type="text" name="phone-number" id="phone-number" data-e2e="form-phone-number" />
    </div>

    <button type="submit" data-e2e="form-submit">Sign in</button>
  </form>

  <span v-if="isRegistered" data-e2e="form-message">Congratulations you created an account 😊</span>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

form {
  margin: 1rem auto;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

form > button {
  margin-top: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
}
</style>
