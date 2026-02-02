<template>
   <div>
    <AppNav class="sticky top-0 z-50 h-fit" />
  <HeroSection />
   <AboutUs id="about" />
   <MissionVision id="mission" />
   <OurServices id="services" />
   <ContactUs id="contact" />
   <CTASection />
   <AppFooter />
   </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nouvelle Maison - Digital-Driven Realty Solutions in Ghana',
  meta: [
    {
      name: 'description',
      content: 'Nouvelle Maison is a digital-driven realty solutions provider offering property sales, rentals, advisory, and development services in Ghana. Buy properties with certainty.'
    },
    {
      name: 'keywords',
      content: 'real estate Ghana, property sales Ghana, luxury apartments Ghana, property rental Accra, real estate investment, property development Ghana, buy property Ghana'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Nouvelle Maison - Luxury Living Within Reach'
    },
    {
      property: 'og:description',
      content: 'Digital-driven realty solutions provider. Connect with homebuyers through intelligent solutions for property sales, rentals, and development in Ghana.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://nouvellemaison.com'
    },
    {
      property: 'og:image',
      content: 'https://nouvellemaison.com/og-image.jpg'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Nouvelle Maison - Digital-Driven Realty Solutions'
    },
    {
      name: 'twitter:description',
      content: 'Luxury living within reach. Professional real estate solutions in Ghana.'
    },
    {
      name: 'twitter:image',
      content: 'https://nouvellemaison.com/twitter-image.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://nouvellemaison.com'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: 'Nouvelle Maison',
        description: 'Digital-driven realty solutions provider offering property sales, rentals, advisory, and development services in Ghana.',
        url: 'https://nouvellemaison.com',
        logo: 'https://nouvellemaison.com/logo.png',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Real Estate Avenue',
          addressLocality: 'Accra',
          addressCountry: 'GH'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+233-123-456-789',
          contactType: 'Sales',
          email: 'info@nouvellemaison.com',
          availableLanguage: ['English']
        },
        foundingDate: '2022',
        areaServed: {
          '@type': 'Country',
          name: 'Ghana'
        },
        serviceType: [
          'Property Sales',
          'Property Rentals',
          'Property Advisory',
          'Property Development'
        ]
      })
    }
  ]
})

useSeoMeta({
  ogSiteName: 'Nouvelle Maison',
  twitterCard: 'summary_large_image'
})
</script>
