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
    <div class="w-full relative z-10 bg-black/20 backdrop-blur-sm p-4 py-20 flex flex-col items-center justify-center h-full">
    <AppSecondaryHeader class="!text-center">Ready to get started?</AppSecondaryHeader>

    <AppButton @click="$router.push('/#contact')" class="mt-5"><PhPhone class="w-5 h-5 mr-2" /><span>Give us a Call</span></AppButton>
    </div>
    </div>
    </div>
</template>
<script setup lang="ts">
import { PhPhone } from '@phosphor-icons/vue'
</script>