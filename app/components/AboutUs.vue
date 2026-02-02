<template>
    <div ref="sectionRef" class="w-full h-screen p-4 md:p-10">
    <div class="w-full h-full flex flex-col gap-5 md:gap-10 items-center justify-center bg-black px-4 md:px-10 py-20">
    <AppPretitle>About Us</AppPretitle>
     <AppSecondaryHeader>Who We Are</AppSecondaryHeader>
<p class="max-w-4xl text-sm md:text-lg text-center text-white">
  <span>{{ displayedText1 }}</span>
  <br v-if="showBreak">
  <br v-if="showBreak">
  <span>{{ displayedText2 }}</span>
</p>

<!-- Stats Section -->
<div ref="statsRef" class="w-full max-w-6xl mt-16">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
    <!-- Destinations -->
    <div class="flex flex-col items-center md:items-start border-l-2 border-amber-400 pl-6">
      <div class="text-5xl md:text-6xl font-bold text-white mb-2">
        {{ animatedDestinations }}
      </div>
      <div class="text-gray-400 text-sm md:text-base">Exciting Destinations</div>
    </div>
    
    <!-- Masterpieces -->
    <div class="flex flex-col items-center md:items-start border-l-2 border-amber-400 pl-6">
      <div class="text-5xl md:text-6xl font-bold text-white mb-2">
        {{ animatedMasterpieces }}
      </div>
      <div class="text-gray-400 text-sm md:text-base">Marketplaces</div>
    </div>
    
    <!-- Portfolio -->
    <div class="flex flex-col items-center md:items-start border-l-2 border-amber-400 pl-6">
      <div class="text-5xl md:text-6xl font-bold text-white mb-2">
        {{ animatedPortfolio }}
      </div>
      <div class="text-gray-400 text-sm md:text-base">Portfolio</div>
    </div>
  </div>
</div>

    </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const text1 = "Nouvelle Maison is a digital-driven realty solutions provider. We offer intelligent solutions that empower homeowners, property investors and real estate agents."
const text2 = "Founded in 2022 with the vision of providing real-time real estate solutions backed by digital technology, we are able to bring professionalism into real estate by providing scientific but flexible service delivery that gives power to the buyer."

const sectionRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)
const displayedText1 = ref('')
const displayedText2 = ref('')
const showBreak = ref(false)
const hasTyped = ref(false)
const hasAnimatedStats = ref(false)

// Stats animation
const animatedDestinations = ref('00')
const animatedMasterpieces = ref('00')
const animatedPortfolio = ref('0')

let typingTimeout: NodeJS.Timeout

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
  
  const duration = 2000 // 2 seconds
  const steps = 60
  const interval = duration / steps
  
  const targetDestinations = 0
  const targetMasterpieces = 0
  const targetPortfolio = 0
  
  let currentStep = 0
  
  const animate = () => {
    currentStep++
    const progress = currentStep / steps
    
    // Ease out animation
    const easeProgress = 1 - Math.pow(1 - progress, 3)
    
    animatedDestinations.value = String(Math.floor(easeProgress * targetDestinations)).padStart(2, '0')
    animatedMasterpieces.value = String(Math.floor(easeProgress * targetMasterpieces)).padStart(2, '0')
    animatedPortfolio.value = String(Math.floor(easeProgress * targetPortfolio))
    
    if (currentStep < steps) {
      setTimeout(animate, interval)
    } else {
      // Ensure final values are exact
      animatedDestinations.value = String(targetDestinations).padStart(2, '0')
      animatedMasterpieces.value = String(targetMasterpieces).padStart(2, '0')
      animatedPortfolio.value = String(targetPortfolio)
    }
  }
  
  animate()
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