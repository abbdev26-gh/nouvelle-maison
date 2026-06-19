<template>
  <div class="w-full bg-black px-4 md:px-10 py-20">
    <div
      class="w-full flex flex-col items-center gap-4 pb-10 border-b border-amber-400/20"
    >
      <img src="/images/logo-white.png" class="h-20 md:h-32" alt="logo" >
      <p class="text-white font-semibold text-sm md:text-base sr-only">NOUVELLE MAISON</p>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20 mt-10">
      <div class="grid">
        <AppPretitle class="justify-start!">{{ content.addressTitle }}</AppPretitle>
        <p class="text-gray-300 text-sm md:text-base mt-2 ml-6">
          <span v-for="line in content.addressLines" :key="line">{{ line }}<br ></span>
        </p>
      </div>
      <div class="grid">
        <AppPretitle class="justify-start!">{{ content.callTitle }}</AppPretitle>
        <p class="text-gray-300 text-sm md:text-base mt-2 ml-6">
          <span v-for="phone in content.phones" :key="phone">{{ phone }}<br ></span>
        </p>
      </div>
      <div class="grid">
        <AppPretitle class="justify-start!">{{ content.emailTitle }}</AppPretitle>
        <p class="text-gray-300 text-sm ml-6 md:text-base mt-2">
          <span v-for="email in content.emails" :key="email">
            <a :href="`mailto:${email}`">{{ email }}</a><br >
          </span>
        </p>
      </div>
      <div class="grid">
        <AppPretitle class="justify-start!">{{ content.exploreTitle }}</AppPretitle>
        <ul class="flex flex-col gap-1 mt-2 ml-6">
          <li v-for="link in content.links" :key="link.label">
            <a
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              :class="link.external ? 'text-amber-400 font-semibold' : 'text-gray-300 hover:text-amber-400'"
              class="text-sm md:text-base"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full text-center text-white text-sm mt-20">
      {{ content.copyright }}
    </div>
  </div>
</template>

<script setup lang="ts">
type FooterContent = {
  addressTitle: string
  callTitle: string
  emailTitle: string
  exploreTitle: string
  addressLines: string[]
  phones: string[]
  emails: string[]
  links: Array<{
    label: string
    href: string
    external?: boolean
  }>
  copyright: string
}

const { content } = defineProps<{
  content: FooterContent
}>()
</script>
