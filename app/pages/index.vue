<template>
  <div>
    <AppNav class="sticky top-0 z-50 h-fit" :content="content.navigation" />
    <HeroSection :content="content.hero" />
    <AboutUs id="about" :content="content.about" />
    <MissionVision id="mission" :content="content.missionVision" />
    <OurValues id="values" :content="content.values" />
    <OurServices id="services" :content="content.services" />
    <TeamSection id="team" :content="content.team" />
    <ContactUs id="contact" :content="content.contact" />
    <CTASection :content="content.cta" />
    <AppFooter :content="content.footer" />
  </div>
</template>

<script setup lang="ts">
type HomeContent = Record<string, any>

const { data: home } = await useAsyncData('home-content', () => queryCollection('home').path('/').first())

if (!home.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Home content not found'
  })
}

const rawContent = home.value as HomeContent
const content = {
  ...(rawContent.meta ?? {}),
  ...rawContent
} as HomeContent

if (!content.organization) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Home content is missing organization metadata'
  })
}

useHead({
  title: content.title,
  meta: [
    { name: 'description', content: content.description },
    { name: 'keywords', content: content.seoMeta.keywords.join(', ') },
    { property: 'og:title', content: content.title },
    { property: 'og:description', content: content.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: content.seoMeta.canonical },
    { property: 'og:image', content: content.seoMeta.ogImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: content.title },
    { name: 'twitter:description', content: content.description },
    { name: 'twitter:image', content: content.seoMeta.twitterImage }
  ],
  link: [
    {
      rel: 'canonical',
      href: content.seoMeta.canonical
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: content.organization.name,
        description: content.description,
        url: content.organization.url,
        logo: content.organization.logo,
        address: {
          '@type': 'PostalAddress',
          streetAddress: content.organization.address.streetAddress,
          addressLocality: content.organization.address.addressLocality,
          addressCountry: content.organization.address.addressCountry
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: content.organization.telephone,
          contactType: 'Sales',
          email: content.organization.email,
          availableLanguage: ['English']
        },
        foundingDate: content.organization.foundingDate,
        areaServed: {
          '@type': 'Country',
          name: 'Ghana'
        },
        serviceType: content.services.items.map((service: { title: string }) => service.title)
      })
    }
  ]
})

useSeoMeta({
  ogSiteName: content.organization.name,
  twitterCard: 'summary_large_image'
})
</script>
