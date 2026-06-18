<template>
  <div id="team" class="w-full bg-black py-20 md:py-32 px-4 md:px-10">
    <div class="max-w-screen-2xl mx-auto">
      <div class="text-center mb-16">
        <AppPretitle>{{ content.pretitle }}</AppPretitle>
        <AppSecondaryHeader>{{ content.title }}</AppSecondaryHeader>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        <div
          v-for="(member, index) in content.members"
          :key="index"
          class="flex flex-col items-center text-center group"
        >
          <div class="w-full aspect-square overflow-hidden mb-5 relative">
            <img
              :src="member.photo"
              :alt="member.name"
              class="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <h3 class="text-white font-bold text-base md:text-lg">{{ member.name }}</h3>
          <p class="text-amber-400 text-sm mt-1">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type TeamContent = {
  pretitle: string
  title: string
  members: Array<{
    name: string
    role: string
    photo: string
  }>
}

const { content } = defineProps<{
  content: TeamContent
}>()
</script>
