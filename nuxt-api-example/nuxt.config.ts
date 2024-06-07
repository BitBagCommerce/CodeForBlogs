// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vue: {
    propsDestructure: true,
  },
  css: ['~/assets/main.css'],
});
