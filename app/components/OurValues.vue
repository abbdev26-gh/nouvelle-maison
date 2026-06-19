<template>
  <div id="values" class="w-full bg-black py-20 md:py-32 px-4 md:px-10">
    <div class="max-w-screen-2xl mx-auto">
      <div class="text-center mb-16">
        <AppPretitle>{{ content.pretitle }}</AppPretitle>
        <AppSecondaryHeader>{{ content.title }}</AppSecondaryHeader>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div
          v-for="(value, index) in content.items"
          :key="index"
          class="border-l-2 border-amber-400 pl-8 py-6 group hover:bg-white/5 transition-colors pr-6"
        >
          <div class="w-10 h-10 bg-amber-400/20 flex items-center justify-center mb-5">
            <component :is="iconMap[value.icon]" class="w-5 h-5 text-amber-400" />
          </div>
          <h3 class="text-white text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide">{{ value.title }}</h3>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhStar, PhHeadset, PhChartLineUp, PhShieldCheck } from '@phosphor-icons/vue'

type ValuesContent = {
  pretitle: string
  title: string
  items: Array<{
    icon: 'star' | 'headset' | 'chart' | 'shield'
    title: string
    description: string
  }>
}

const { content } = defineProps<{
  content: ValuesContent
}>()

const iconMap = {
  star: PhStar,
  headset: PhHeadset,
  chart: PhChartLineUp,
  shield: PhShieldCheck
} as const
</script>
