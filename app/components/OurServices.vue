<template>
    <div class="p-2 md:p-10" id="services">
    <div class="w-full flex flex-col items-center px-4 py-12 md:p-10 bg-black md:!py-20">
  <AppPretitle>{{ content.pretitle }}</AppPretitle>
  <AppSecondaryHeader>{{ content.title }}</AppSecondaryHeader>
    
    <div class="w-full max-w-screen-2xl mt-12 h-[800px] flex flex-row md:flex-row">
      <div 
        v-for="(service, index) in content.items" 
        :key="index"
        class="relative overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group"
        :class="hoveredIndex === index ? 'flex-[3]' : 'flex-[0.5]'"
        @mouseenter="hoveredIndex = index"
        @click="hoveredIndex = index"
        @touchstart="hoveredIndex = index"
      >
        <!-- Background overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
        
        <!-- Background image -->
        <img 
          :src="service.image" 
          :alt="service.title"
          class="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        
        <!-- Content -->
        <div class="relative z-20 h-full p-6 flex flex-col justify-end">
          <!-- Title (always visible) -->
          <h3 
            class="text-white font-bold transition-all duration-700 origin-bottom-left"
            :class="hoveredIndex === index ? 'text-xl md:text-3xl mb-4' : 'text-lg md:text-2xl whitespace-nowrap transform -rotate-90 translate-y-0 translate-x-2 md:translate-x-5'"
          >
            {{ service.title }}
          </h3>
          
          <!-- Description + CTA (only visible when expanded) -->
          <div 
            class="overflow-hidden transition-all duration-700"
            :class="hoveredIndex === index ? ' max-h-[500px] md:max-h-[400px] opacity-100' : 'max-h-0 opacity-0'"
          >
            <p class="text-gray-200 text-sm md:text-base max-w-xl leading-relaxed mb-5">
              {{ service.description }}
            </p>
            <a
              href="https://listings.nouvellemaisonlimited.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              {{ content.projectLabel }} <PhArrowSquareOut class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PhArrowSquareOut } from '@phosphor-icons/vue'

type ServicesContent = {
  pretitle: string
  title: string
  projectLabel: string
  items: Array<{
    title: string
    image: string
    description: string
  }>
}

const { content } = defineProps<{
  content: ServicesContent
}>()

const hoveredIndex = ref(0)
</script>