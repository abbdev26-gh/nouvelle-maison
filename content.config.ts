import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
  external: z.boolean().optional()
})

const actionSchema = z.object({
  label: z.string(),
  href: z.string(),
  external: z.boolean().optional()
})

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'index.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        seoMeta: z.object({
          keywords: z.array(z.string()),
          canonical: z.string(),
          ogImage: z.string(),
          twitterImage: z.string()
        }),
        navigation: z.object({
          brand: z.string(),
          contactLabel: z.string(),
          projectLabel: z.string(),
          menu: z.array(linkSchema)
        }),
        organization: z.object({
          name: z.string(),
          logo: z.string(),
          url: z.string(),
          foundingDate: z.string(),
          email: z.string(),
          telephone: z.string(),
          address: z.object({
            streetAddress: z.string(),
            addressLocality: z.string(),
            addressCountry: z.string()
          })
        }),
        hero: z.object({
          titleRotations: z.array(z.string()),
          marquee: z.array(z.string()),
          description: z.string(),
          primaryAction: actionSchema,
          secondaryAction: actionSchema
        }),
        about: z.object({
          pretitle: z.string(),
          title: z.string(),
          paragraphs: z.array(z.string()),
          stats: z.array(z.object({
            value: z.number(),
            label: z.string()
          }))
        }),
        missionVision: z.object({
          sections: z.array(z.object({
            pretitle: z.string(),
            title: z.string()
          }))
        }),
        values: z.object({
          pretitle: z.string(),
          title: z.string(),
          items: z.array(z.object({
            icon: z.string(),
            title: z.string(),
            description: z.string()
          }))
        }),
        services: z.object({
          pretitle: z.string(),
          title: z.string(),
          projectLabel: z.string(),
          items: z.array(z.object({
            title: z.string(),
            image: z.string(),
            description: z.string()
          }))
        }),
        team: z.object({
          pretitle: z.string(),
          title: z.string(),
          members: z.array(z.object({
            name: z.string(),
            role: z.string(),
            photo: z.string()
          }))
        }),
        contact: z.object({
          pretitle: z.string(),
          title: z.string(),
          infoTitle: z.string(),
          locationLabel: z.string(),
          phoneLabel: z.string(),
          emailLabel: z.string(),
          addressLines: z.array(z.string()),
          phones: z.array(z.string()),
          emails: z.array(z.string()),
          mapEmbedUrl: z.string()
        }),
        cta: z.object({
          title: z.string(),
          description: z.string(),
          primaryAction: actionSchema,
          secondaryAction: actionSchema
        }),
        footer: z.object({
          addressTitle: z.string(),
          callTitle: z.string(),
          emailTitle: z.string(),
          exploreTitle: z.string(),
          addressLines: z.array(z.string()),
          phones: z.array(z.string()),
          emails: z.array(z.string()),
          links: z.array(linkSchema),
          copyright: z.string()
        })
      })
    })
  }
})
