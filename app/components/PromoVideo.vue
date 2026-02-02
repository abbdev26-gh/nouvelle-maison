<script setup lang="ts">
import type { PhXCircle } from '@phosphor-icons/vue';

defineEmits(['close'])
</script>

<template>
   <Teleport to="body">
     <div class="fixed inset-0 top-0 w-full h-full z-[1000] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
        <button @click="$emit('close')" class="absolute top-10 right-10 z-[1001] text-white hover:text-amber-300"><span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="96" x2="160" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
        </span><span class="invisible">Close</span></button>
        <div style="position:relative;aspect-ratio:16/9;" class="z-50 max-w-7xl w-full">
      <iframe 
            loading="lazy" title="Gumlet video player"
            src="https://play.gumlet.io/embed/693809857aaaf18e07b25182?background=false&autoplay=false&loop=false&disableControls=false"
            style="border:none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
          referrerpolicy="origin"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
          </iframe>
    </div>
    </div>
   </Teleport>  
</template>