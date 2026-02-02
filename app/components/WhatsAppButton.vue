<template>
  <div class="fixed bottom-6 right-6 z-50 flex items-center gap-4">
    <!-- Tooltip -->
    <div 
      class="opacity-0 translate-x-4 transition-all duration-300 ease-out bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-800 whitespace-nowrap hidden md:block"
      :class="{ 'opacity-100 translate-x-0': isHovered }"
    >
      Send us a message
      <!-- Triangle pointer -->
      <div class="absolute top-1/2 -right-1 -mt-1 h-2 w-2 rotate-45 bg-white"></div>
    </div>

    <a
	      href="https://wa.me/233257728848"
      target="_blank"
      rel="noopener noreferrer"
      class="group flex h-14 px-2 md:px-4  items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contact us on WhatsApp"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <PhWhatsappLogo :size="32" weight="fill" />
      <span class="pl-2 hidden md:block">Contact us on WhatsApp</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PhWhatsappLogo } from '@phosphor-icons/vue'

const isHovered = ref(false)
</script>
