import { defineAsyncComponent } from 'vue';

export const ALL_POSTS = {
  'ai-reshaped-software-2': {
    title: 'WIP - AI reshaped software: Part 2',
    cover: 'assets/posts/data_extraction-1.optimized.jpg',
    slug: 'ai-reshaped-software-2',
    createdAt: '2025-01-XX',
  },
  'ai-maturity': {
    title: 'WIP - AI Maturity',
    cover: 'assets/posts/data_extraction-1.optimized.jpg',
    slug: 'ai-maturity',
    createdAt: '2025-01-XX',
  },
  'data-extraction': {
    title: 'AI reshaped software: Data Extraction',
    cover: 'assets/posts/data_extraction-1.optimized.jpg',
    slug: 'data-extraction',
    createdAt: '2024-12-22',
    component: defineAsyncComponent(() => import('~/components/posts/data_extraction.vue'))
  },
  'agi-is-not-that-important': {
    title: 'AGI is not that important',
    cover: 'assets/posts/agi_is_not_that_important-1.optimized.jpg',
    slug: 'agi-is-not-that-important',
    createdAt: '2024-12-13',
    component: defineAsyncComponent(() => import('~/components/posts/agi_is_not_that_important.vue'))
  },
  'we-need-less-layers-not-more': {
    title: 'WIP - we need less layers, not more WIP',
    slug: 'we-need-less-layers-not-more',
    createdAt: '2024-04-05',
  },
  'services-topology': {
    title: 'WIP - Services topology WIP',
    slug: 'services-topology',
    createdAt: '2024-01-XX',
  },
  'scaling-local-envoriment-by-ruby-cli': {
    title: 'WIP - Scaling local envoriment by ruby cli WIP',
    slug: 'scaling-local-envoriment-by-ruby-cli',
    createdAt: '2022-08-05',
  },
  'i18n-for-large-systems': {
    title: 'WIP - I18n for large systems WIP',
    slug: 'i18n-for-large-systems',
    createdAt: '2021-10-27',
  },
}
