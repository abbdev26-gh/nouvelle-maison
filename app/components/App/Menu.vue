<template>
    <div class="w-full h-screen fixed inset-0 z-[1000] top-0 bg-black/50 backdrop-blur-sm animate-fade-in">
    <div class="w-full h-full">
    <div class="w-full md:w-1/2 h-full bg-white/20 !backdrop-blur-3xl px-4 md:px-10 py-4 animate-slide-in">
    <button @click="$emit('closeMenu')" class="text-white font-semibold text-2xl p-4 bg-black/50 animate-scale-in"><span class="sr-only">Menu</span><PhX class="w-5 h-5 text-yellow-500" /></button>
    <ul class="mt-5 md:mt-10">
    <li class="animate-slide-up" @click="$emit('closeMenu')" style="animation-delay: 0.1s;"><a href="/#" class="text-gray-300 text-lg md:text-xl hover:text-amber-400">Home</a></li>
    <li class="mt-4 md:mt-10 animate-slide-up" @click="$emit('closeMenu')" style="animation-delay: 0.2s;"><a href="/#about" class="text-gray-300 text-lg md:text-xl hover:text-amber-400">About Us</a></li>
    <li class="mt-4 md:mt-10 animate-slide-up" @click="$emit('closeMenu')" style="animation-delay: 0.3s;"><a href="/#services" class="text-gray-300 text-lg md:text-xl hover:text-amber-400">Our Services</a></li>
    <li class="mt-4 md:mt-10 animate-slide-up" @click="$emit('closeMenu')" style="animation-delay: 0.4s;"><a href="/#mission" class="text-gray-300 text-lg md:text-xl hover:text-amber-400">Mission & Vision</a></li>
    <li class="mt-4 md:mt-10 animate-slide-up" @click="$emit('closeMenu')" style="animation-delay: 0.5s;"><a href="/#contact" class="text-gray-300 text-lg md:text-xl hover:text-amber-400">Contact Us</a></li>
    </ul>
    </div>
    </div>
        
    </div>
</template>

<script setup>
import { PhX } from "@phosphor-icons/vue";

defineEmits(['closeMenu']);
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8) rotate(-90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

.animate-slide-in {
  animation: slideIn 0.4s ease-out;
}

.animate-slide-up {
  opacity: 0;
  animation: slideUp 0.5s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out 0.3s forwards;
  opacity: 0;
}
</style>