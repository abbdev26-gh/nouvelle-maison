<template>
    <div class="w-full !h-[calc(90vh-56px)] md:!h-[calc(100vh-186px)]  aspect-[16/9] bg-black relative overflow-hidden">
    <video autoplay muted loop playsinline class="absolute w-full h-full object-cover">
        <source src="https://video.gumlet.io/680ac81b0527a5bd8dda23eb/696021d7ac93fe08564d648b/download.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <!-- <div style="position:absolute;aspect-ratio:16/9;" class="w-screen shrink-0 h-screen  object-cover">
      <iframe 
            loading="lazy" title="Gumlet video player"
            src="https://play.gumlet.io/embed/6935e66f491e9c48bfcbd850?background=true&autoplay=true&loop=true&disableControls=true"
            style="border:none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
          referrerpolicy="origin"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
          </iframe>
    </div> -->
   <Transition name="fade">
     <div v-if="showHero" class="flex flex-col justify-center items-center h-full w-full text-center  px-4 relative z-10 p-4 md:p-10">
        <div class="flex flex-col items-center px-4 md:px-10 py-10">
          <!-- <img src="/images/logo-full.png" class="w-28 md:w-40" alt="logo">
          <p class="text-lg md:text-xl font-normal mb-6 tracking-wider text-amber-500">Nouvelle Maison</p> -->
          <h1 class="text-3xl md:text-7xl max-w-5xl font-medium text-white mb-6  items-center">
            {{ displayText }}<span class="animate-pulse text-amber-400">|</span>
        </h1>
        <p class="text-lg hidden md:text-2xl text-gray-300 mb-8 max-w-3xl">Welcome to Nouvelle Maison crafted for comfort, style, and effortless luxury.</p>
       <AppButton @click="$router.push('/#services')">See Our Services</AppButton>
        </div>
        </div>
   
   </Transition>
 </div>
    <div class="w-full h-16 bg-black flex items-center overflow-x-hidden relative">
        <div class="marquee-content-1 whitespace-nowrap flex items-center absolute top-0 py-4">
            <span v-for="(text, index) in newText" :key="index" class="text-white text-base md:text-2xl font-light tracking-widest mx-4">
                {{ text }} <span class="text-amber-400 mx-4">*</span>
            </span>
             <span v-for="(text, index) in newText" :key="index + 'dup'" class="text-white text-base md:text-2xl font-light tracking-widest mx-4">
                {{ text }} <span class="text-amber-400 mx-4">*</span>
            </span>
        </div>
        <div class="marquee-content-2 whitespace-nowrap flex items-center absolute top-0 py-4">
            <span v-for="(text, index) in newText" :key="index" class="text-white text-base md:text-2xl font-light tracking-widest mx-4">
                {{ text }} <span class="text-amber-400 mx-4">*</span>
            </span>
             <span v-for="(text, index) in newText" :key="index + 'dup2'" class="text-white text-base md:text-2xl font-light tracking-widest mx-4">
                {{ text }} <span class="text-amber-400 mx-4">*</span>
            </span>
        </div>
    </div>
</template>

<style scoped>
.marquee-content-1 {
  animation: marquee 25s linear infinite;
}

.marquee-content-2 {
  animation: marquee2 25s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

@keyframes marquee2 {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0%); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
  transition: transform 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const texts = [
  "LUXURY LIVING WITHIN REACH",
  "ALL-IN-ONE DIGITAL REALTY SOLUTIONS",
]

const newText = [
  "NOUVELLE MAISON",
  "Crafted for comfort, style, and effortless luxury",
]

const displayText = ref('')
const currentTextIndex = ref(0)
const currentCharIndex = ref(0)
const isDeleting = ref(false)
let typingTimeout: NodeJS.Timeout

const typeWriter = () => {
  const currentText = texts[currentTextIndex.value]
  
  if (!isDeleting.value) {
    // Typing
    if (currentCharIndex.value < currentText.length) {
      displayText.value = currentText.substring(0, currentCharIndex.value + 1)
      currentCharIndex.value++
      typingTimeout = setTimeout(typeWriter, 80)
    } else {
      // Pause at end before deleting
      typingTimeout = setTimeout(() => {
        isDeleting.value = true
        typeWriter()
      }, 2000)
    }
  } else {
    // Deleting
    if (currentCharIndex.value > 0) {
      displayText.value = currentText.substring(0, currentCharIndex.value - 1)
      currentCharIndex.value--
      typingTimeout = setTimeout(typeWriter, 50)
    } else {
      // Move to next text
      isDeleting.value = false
      currentTextIndex.value = (currentTextIndex.value + 1) % texts.length
      typingTimeout = setTimeout(typeWriter, 500)
    }
  }
}

const showHero = ref(false)

onMounted(() => {
  typeWriter()

  setTimeout(() => {
    showHero.value = true
  }, 5000)

})

onUnmounted(() => {
  if (typingTimeout) {
    clearTimeout(typingTimeout)
  }
})
</script>