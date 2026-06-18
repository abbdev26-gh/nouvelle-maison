# Installation

> Get started with Nuxt Content v3 in your Nuxt application.

## Install the Package

Choose your preferred package manager to install Nuxt Content v3:

<code-group>

```bash [pnpm]
pnpm add @nuxt/content
```

```bash [yarn]
yarn add @nuxt/content
```

```bash [npm]
npm install @nuxt/content
```

```bash [bun]
bun add @nuxt/content
```

</code-group>

## Register the Module

Add the Nuxt Content module to your `nuxt.config.ts`:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/content']
})
```

## Automatic Setup

When starting a new Nuxt project with the `create-nuxt` CLI, you can simply select `@nuxt/content` from the interactive module selector. This will automatically install and register the module for you.

<code-group>

```bash [npm]
npm create nuxt <project-name>
```

```bash [yarn]
yarn create nuxt <project-name>
```

```bash [pnpm]
pnpm create nuxt <project-name>
```

```bash [bun]
bun create nuxt <project-name>
```

```bash [deno]
deno -A npm:create-nuxt@latest <project-name>
```

</code-group>

<note color="warning">

When you run your project in Node.js, Nuxt Content will ask you about the database connector to use.
You can choose to install `better-sqlite3` or `sqlite3` package.

<br />

If you don't want to install any package, you can use native SQLite from Node.js@v22.5.0 or newer.
Checkout [`experimental.sqliteConnector` configuration](/docs/getting-started/configuration#experimentalsqliteconnector).

</note>

<note color="warning">

If you use **pnpm v10+**, dependency build scripts are not executed by default.

<br />

Since `better-sqlite3` and `sqlite3` rely on a postinstall/build step to generate native bindings,
you may encounter errors such as:

<br />

`Could not locate the bindings file`

<br />

To resolve this, you can approve the required build scripts by running:

<code-group>

```bash [pnpm]
pnpm approve-builds
```

</code-group>

Alternatively, if you need a non-interactive setup (for example in CI),
you can explicitly allow native builds by adding the following configuration
to your project root `package.json`:

```json [package.json]
{
  "pnpm": {
    "onlyBuiltDependencies": [
      "better-sqlite3",
      "sqlite3"
    ]
  }
}
```

You may also need to clear your `node_modules` or explicitly build if
the initial install didn't do that:

<code-group>

```bash [pnpm]
pnpm rebuild better-sqlite3 sqlite3
```

</code-group>
</note>

## Create your First Collection

Create a `content.config.ts` file in your project root directory:

```ts [content.config.ts]
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
```

This configuration creates a default `content` collection that processes all Markdown files located in the `content` folder of your project. You can customize the collection settings based on your needs.

<tip>

The `type: page` means there is a 1-to-1 relationship between content files and pages on your site.

</tip>

<note to="/docs/collections/define">

Learn more in our **Collections guide**.

</note>

## Create your First Markdown Page

Create a `content/index.md` file in your project root directory:

```md [content/index.md]
# My First Page

Here is some content.
```

Read more about writing [Markdown pages](/docs/files/markdown).

## Display your Page

Create a `pages/index.vue` file and display the page content:

```vue [pages/index.vue]
<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>
```

<note icon="i-lucide-info">

If you are installing Nuxt Content in a new Nuxt project and you didn't have `pages` directory, you also need to update the `app.vue` file to allow rendering the pages by adding the `NuxtPage` component. (If you already have some pages in your project, you are good to go.)

```vue [app.vue]
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

</note>

<tip icon="i-lucide-rocket">

That's it! You've now created your first Nuxt Content page.

</tip>

# Define Content Collections

> Learn how to define and configure content collections in your Nuxt application.

The Nuxt Content module automatically parses any content files within the `content/` directory located at the root of your Nuxt application. This setup allows you to freely structure the folder to suit your project's needs.

For better organization, consider using Content Collections, which let you categorize and manage content more effectively. These collections are defined in a `content.config.ts` file.

<warning>

If no `content.config.ts` file is present, all files within the content folder are parsed and imported by default. However, once a config file is added, only files matching the specified path patterns defined in collections will be imported.

</warning>

## What are Content Collections?

Content Collections organize related items within your Nuxt Content project. They provide a structured way to manage your content, making it easier to query, display, and maintain your site's data.

Key features include:

- **Logical Grouping**: Group similar content together, such as blog posts, product pages, or documentation articles
- **Shared Configuration**: Apply common settings and validations across all items within a collection
- **Improved Querying**: Fetch and filter related content items efficiently
- **Automatic Type Inference**: Get type safety and autocompletion in your development environment
- **Flexible Structure**: Organize collections by content type, category, or any other logical grouping that suits your needs

## Defining Collections

Create a `content.config.ts` file in your project's root directory. This special file configures your collections database, utility types, and content handling.

Here's a basic example:

```ts [content.config.ts]
import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: '**',
    })
  }
})
```

<warning>

Currently, a document is designed to be present in only one collection at a time. If a file is referenced in multiple collections, live reload will not work correctly. To avoid this, it is recommended to use the `exclude` attribute to explicitly exclude a document from other collections using appropriate regex patterns.

This topic is still under discussion in this issue: [nuxt/content#2966](https://github.com/nuxt/content/issues/2966).

</warning>

### Collection Schema

Schemas enforce data consistency within a collection and serve as the source of truth for TypeScript types.

On top of the built-in fields, you can define a schema by adding the `schema` property to your collection by using a [`zod`](https://zod.dev) schema:

```ts [content.config.ts]
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    })
  }
})
```

<note>

`@nuxt/content` exposes a `z` object that contains a set of Zod schemas for common data types. Check [Zod’s README](https://github.com/colinhacks/zod) for complete documentation on how Zod works and what features are available.

</note>

<tip>

You can define as many collections as you want to organize different types of content.

</tip>

### Database Indexes

Optimize query performance by defining indexes on collection columns. Indexes are especially useful for fields used in filtering, sorting, or lookups.

```ts [content.config.ts]
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    products: defineCollection({
      type: 'data',
      source: 'products/*.json',
      schema: z.object({
        sku: z.string(),
        price: z.number(),
        category: z.string(),
        inStock: z.boolean(),
      }),
      indexes: [
        // Single column indexes
        { columns: ['category'] },
        { columns: ['price'] },

        // Composite index for category + price filtering
        { columns: ['category', 'price'] },

        // Unique index to ensure SKU uniqueness
        { columns: ['sku'], unique: true },

        // Custom index name (optional)
        { columns: ['inStock', 'category'], name: 'idx_stock_category' },
      ],
    }),
  },
})
```

<note>

Indexes are created automatically when the database schema is generated. They work across all supported databases: SQLite, Cloudflare D1, PostgreSQL, LibSQL, and PGlite.

</note>

<tip icon="i-ph-lightbulb">

**Cloudflare D1 Cost Optimization**: With indexes, a `WHERE` clause on an indexed column counts as only 1 row read when there's a single match. Without an index, D1 counts all rows scanned in the table, significantly increasing your read costs. Indexes can dramatically reduce your D1 billing.

</tip>

**Index Configuration Options:**

- **columns** (required): Array of column names to include in the index
- **unique** (optional): Set to `true` to create a unique index (default: `false`)
- **name** (optional): Custom index name. If omitted, auto-generates as `idx_{collection}_{column1}_{column2}`

**Performance Tips:**

- Index columns used in `where()` queries for faster filtering
- Index columns used in `sort()` for optimized sorting
- Use composite indexes for queries that filter/sort by multiple columns
- Unique indexes automatically enforce data uniqueness constraints

## Querying Collections

Use the [`queryCollection`](/docs/utils/query-collection) util to fetch one or all items from a collection:

```vue [pages/blog.vue]
<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())
</script>

<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
```

<note to="/docs/utils/query-collection">

Learn more about the available query options in our `queryCollections` API documentation.

</note>

## defineCollection()

The `defineCollection` function defines a collection in your content configuration. Here's its TypeScript signature:

```ts
function defineCollection(collection: Collection): DefinedCollection

type Collection = {
  // Determines how content is processed
  type: 'page' | 'data'
  // Specifies content location
  source?: string | CollectionSource
  // Zod schema for content validation and typing
  schema?: ZodObject<T>
  // Database indexes for query optimization
  indexes?: CollectionIndex[]
}

type CollectionIndex = {
  // Column names to include in the index
  columns: string[]
  // Optional custom index name
  name?: string
  // Whether this is a unique index (default: false)
  unique?: boolean
}
```

<note to="/docs/collections/types">

Learn more about collection types.

</note>

```ts
type CollectionSource = {
  // Glob pattern for content matching
  include: string
  // .path prefix (only applies to 'page' type)
  prefix?: string
  // Glob patterns to exclude content
  exclude?: string[]
  // Root directory for content matching
  cwd?: string
  // Remote git repository URL (e.g., https://github.com/nuxt/content)
  repository?: string
  // Authentication token for private repositories (e.g., GitHub personal access token)
  authToken?: string
}
```

<note to="/docs/collections/sources">

Learn more about collection sources.

</note>

The function returns the defined collection object.
