<template>
 <button 
    ref="buttonRef"
    class="relative bg-amber-400/10 text-amber-500  text-sm uppercase hover:text-amber-600 font-bold px-6 py-4 text-lg overflow-visible group transition duration-300"
 >
    <span class="relative z-10 inline-flex flex-row gap-2">
      <slot />
    </span>
    
    <!-- SVG for drawing effect with cursor -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none overflow-visible" xmlns="http://www.w3.org/2000/svg">
      <rect 
        class="border-draw"
        x="2" 
        y="2" 
        :width="rectWidth" 
        :height="rectHeight"
        fill="none" 
        stroke="#fbbf24" 
        stroke-width="2"
        pathLength="100"
      />
      
      <!-- Animated cursor dot -->
      <circle 
        class="cursor-dot"
        r="4" 
        fill="#fbbf24"
      >
        <animateMotion
          dur="0.8s"
          begin="indefinite"
          fill="freeze"
          calcMode="linear"
        >
          <mpath href="#border-path" />
        </animateMotion>
      </circle>
      
      <!-- Hidden path for cursor to follow -->
      <path 
        id="border-path"
        :d="`M 2 2 L ${rectWidth + 2} 2 L ${rectWidth + 2} ${rectHeight + 2} L 2 ${rectHeight + 2} Z`"
        fill="none"
        stroke="none"
      />
    </svg>
 </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const buttonRef = ref<HTMLButtonElement | null>(null)
const rectWidth = ref(0)
const rectHeight = ref(0)

onMounted(() => {
  if (buttonRef.value) {
    rectWidth.value = buttonRef.value.offsetWidth - 4
    rectHeight.value = buttonRef.value.offsetHeight - 4
    
    // Trigger animation on hover
    buttonRef.value.addEventListener('mouseenter', () => {
      const circle = buttonRef.value?.querySelector('.cursor-dot animateMotion')
      if (circle) {
        circle.beginElement()
      }
    })
  }
})
</script>

<style scoped>
.border-draw {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset 0.8s ease-in-out;
}

button:hover .border-draw {
  stroke-dashoffset: 0;
}

.cursor-dot {
  opacity: 0;
}

button:hover .cursor-dot {
  opacity: 0;
}
</style>