<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <WhatsAppButton />
  </div>
</template>

<script setup lang="ts">
// Global SEO configuration
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#000000' }
  ]
})
</script>
