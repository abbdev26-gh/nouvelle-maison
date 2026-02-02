<template>
    <div class="w-full px-4 md:px-10 py-4 md:py-10 bg-black/80 backdrop-blur-3xl">
    <div class="w-full flex flex-row-reverse md:flex-row item-center justify-between gap-3 md:gap-10">
    <button class="text-white font-semibold text-2xl p-4 bg-black/50" @click="showMenu = true"><span class="sr-only">Menu</span><PhList class="w-5 h-5 text-yellow-500" /></button>
    <div class="flex items-center gap-3"><img src="/images/logo-white.png" class="h-12 md:h-20 shrink-0 md:absolute md:inset-0 md:m-auto" alt="logo"><span class="text-white font-semibold text-sm uppercase sr-only tracking-wider">Nouvelle <br class="md:hidden"> Maison</span></div>
    <AppButton @click="$router.push('/#contact')" class="hidden md:block">Contact Us</AppButton>
    </div>

    <AppMenu v-if="showMenu" @close-menu="showMenu = false" />
    </div>
</template>

<script setup lang="ts">
import {PhList} from '@phosphor-icons/vue'

const showMenu = ref(false);
</script>