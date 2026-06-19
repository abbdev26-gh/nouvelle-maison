<template>
    <div ref="sectionRef" class="w-full h-screen p-4 md:p-10">
    <div class="w-full h-full flex flex-col gap-5 md:gap-10 items-center justify-center bg-black px-4 md:px-10 py-20">
    <AppPretitle>{{ content.pretitle }}</AppPretitle>
     <AppSecondaryHeader>{{ content.title }}</AppSecondaryHeader>
<p class="max-w-4xl text-sm md:text-lg text-center text-white">
  <span>{{ displayedText1 }}</span>
  <br v-if="showBreak">
  <br v-if="showBreak">
  <span>{{ displayedText2 }}</span>
</p>

<!-- Stats Section -->
<div ref="statsRef" class="w-full max-w-6xl mt-16">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
    <div
      v-for="(stat, index) in content.stats"
      :key="stat.label"
      class="flex flex-col items-center md:items-start border-l-2 border-amber-400 pl-6"
    >
      <div class="text-5xl md:text-6xl font-bold text-white mb-2">
        {{ animatedStats[index] }}
      </div>
      <div class="text-gray-400 text-sm md:text-base">{{ stat.label }}</div>
    </div>
  </div>
</div>

    </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

type AboutContent = {
  pretitle: string
  title: string
  paragraphs: string[]
  stats: Array<{
    value: number
    label: string
  }>
}

const { content } = defineProps<{
  content: AboutContent
}>()

const text1 = content.paragraphs[0] ?? ''
const text2 = content.paragraphs[1] ?? ''

const sectionRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)
const displayedText1 = ref('')
const displayedText2 = ref('')
const showBreak = ref(false)
const hasTyped = ref(false)
const hasAnimatedStats = ref(false)

const animatedStats = ref(content.stats.map(() => '00'))

let typingTimeout: ReturnType<typeof setTimeout> | undefined

const typeText = () => {
  if (hasTyped.value) return
  hasTyped.value = true
  
  let index1 = 0
  let index2 = 0
  
  const typeFirstParagraph = () => {
    if (index1 < text1.length) {
      displayedText1.value = text1.substring(0, index1 + 1)
      index1++
      typingTimeout = setTimeout(typeFirstParagraph, 20)
    } else {
      showBreak.value = true
      typingTimeout = setTimeout(typeSecondParagraph, 100)
    }
  }
  
  const typeSecondParagraph = () => {
    if (index2 < text2.length) {
      displayedText2.value = text2.substring(0, index2 + 1)
      index2++
      typingTimeout = setTimeout(typeSecondParagraph, 20)
    } else {
      // Text reveal complete, trigger stats animation
      setTimeout(() => {
        animateStats()
      }, 300)
    }
  }
  
  typeFirstParagraph()
}

const animateStats = () => {
  if (hasAnimatedStats.value) return
  hasAnimatedStats.value = true

  content.stats.forEach((stat, index) => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    const targetValue = stat.value
    let currentStep = 0

    const animate = () => {
      currentStep++
      const progress = currentStep / steps
      const easeProgress = 1 - Math.pow(1 - progress, 3)

      animatedStats.value[index] = String(Math.floor(easeProgress * targetValue)).padStart(2, '0')

      if (currentStep < steps) {
        setTimeout(animate, interval)
      } else {
        animatedStats.value[index] = String(targetValue).padStart(2, '0')
      }
    }

    animate()
  })
}

onMounted(() => {
  const textObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeText()
        }
      })
    },
    { threshold: 0.3 }
  )
  
  if (sectionRef.value) {
    textObserver.observe(sectionRef.value)
  }
  
  onUnmounted(() => {
    textObserver.disconnect()
    if (typingTimeout) {
      clearTimeout(typingTimeout)
    }
  })
})
</script>