import { defineAsyncComponent } from 'vue';

export const ALL_POSTS = {
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
  // 'i18n-for-large-systems': {
  //   title: 'I18n for large systems',
  //   slug: 'i18n-for-large-systems',
  //   createdAt: '2021-10-27',
  //   component: defineAsyncComponent(() => import('~/posts/i18n-for-large-systems.vue'))
  // },
  // 'scaling-local-envoriment-by-ruby-cli': {
  //   title: 'Scaling local envoriment by ruby cli',
  //   slug: 'scaling-local-envoriment-by-ruby-cli',
  //   createdAt: '2022-08-05',
  //   component: defineAsyncComponent(() => import('~/posts/scaling-local-envoriment-by-ruby-cli.vue'))
  // },
  // 'we-need-less-layers-not-more': {
  //   title: 'we need less layers, not more',
  //   slug: 'we-need-less-layers-not-more',
  //   createdAt: '2024-04-05',
  //   component: defineAsyncComponent(() => import('~/posts/we-need-less-layers-not-more.vue'))
  // },
  // 'services-topology': {
  //   title: 'Services topology',
  //   slug: 'services-topology',
  //   createdAt: '2025-XX-XX',
  //   component: defineAsyncComponent(() => import('~/posts/services-topology.vue'))
  // }
}
