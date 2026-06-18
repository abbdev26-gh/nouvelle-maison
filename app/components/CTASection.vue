<template>
    <div class="w-full bg-black overflow-hidden">
    <div class="w-screen relative overflow-hidden w-full md:h-[600px]">
<div class="absolute aspect-ratio:16/9 w-screen h-screen object-cover object-center shrink-0">
      <iframe 
            loading="lazy" title="Gumlet video player"
            src="https://play.gumlet.io/embed/691c2017d854cacb98dea160?background=true&autoplay=true&loop=true&disableControls=true"
            style="border:none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
            class="w-screen shrink-0 h-screen object-cover aspect-ratio:16/9"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
          </iframe>
    </div>
    <div class="w-full relative z-10 bg-black/20 backdrop-blur-sm p-4 py-20 flex flex-col items-center justify-center h-full gap-6">
    <AppSecondaryHeader class="!text-center">{{ content.title }}</AppSecondaryHeader>
    <p class="text-gray-300 text-center max-w-xl text-lg">{{ content.description }}</p>
    <div class="flex flex-col sm:flex-row items-center gap-4 mt-2">
      <a
        :href="content.primaryAction.href"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8 py-3 transition-colors"
      >
        <PhBuildingsIcon class="w-5 h-5" />
        <span>{{ content.primaryAction.label }}</span>
      </a>
      <AppButton @click="$router.push(content.secondaryAction.href)"><PhPhone class="w-5 h-5 mr-2" /><span>{{ content.secondaryAction.label }}</span></AppButton>
    </div>
    </div>
    </div>
    </div>
</template>
<script setup lang="ts">
import { PhPhone } from '@phosphor-icons/vue'
import { PhBuildings as PhBuildingsIcon } from '@phosphor-icons/vue'

type CTAContent = {
  title: string
  description: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction: {
    label: string
    href: string
  }
}

const { content } = defineProps<{
  content: CTAContent
}>()
</script>