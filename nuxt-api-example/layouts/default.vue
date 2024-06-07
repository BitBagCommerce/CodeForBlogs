<template>
  <div class="default">
    <header>
      <NuxtLink to="/">🏠</NuxtLink>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.default {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

main {
  padding-inline: 2rem;
}

header {
  padding: 1rem;
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
}

a {
  padding: 0.25rem;
  color: white;
  font-size: 2rem;
  text-decoration: none;
  border-radius: 0.5rem;
}

a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
