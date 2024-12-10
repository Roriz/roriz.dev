import { defineAsyncComponent } from 'vue';

export const ALL_POSTS = {
  'my-first-post': {
    title: 'My First Post',
    slug: 'my-first-post',
    createdAt: '2021-01-01',
    component: defineAsyncComponent(() => import('~/posts/my-first-post.vue'))
  },
  // 'i18n-for-large-systems': {
  //   title: 'I18n for large systems',
  //   slug: 'i18n-for-large-systems',
  //   createdAt: '2021-10-27',
  //   component: defineAsyncComponent(() => import('~/posts/i18n-for-large-systems.vue'))
  // },
  // 'simplify-blockchain': {
  //   title: 'Simplify blockchain',
  //   slug: 'simplify-blockchain',
  //   createdAt: '2022-03-02',
  //   component: defineAsyncComponent(() => import('~/posts/simplify-blockchain.vue'))
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
  // 'ai-already-change-software-data-extraction': {
  //   title: 'AI already change software - Data extraction',
  //   slug: 'ai-already-change-software-data-extraction',
  //   createdAt: '2024-12-08',
  //   component: defineAsyncComponent(() => import('~/posts/ai-already-change-software-data-extraction.vue'))
  // },
  // 'agi-is-not-important': {
  //   title: 'Agi is not important',
  //   slug: 'agi-is-not-important',
  //   createdAt: '2024-12-23',
  //   component: defineAsyncComponent(() => import('~/posts/agi-is-not-important.vue'))
  // },
  // 'services-topology': {
  //   title: 'Services topology',
  //   slug: 'services-topology',
  //   createdAt: '2025-XX-XX',
  //   component: defineAsyncComponent(() => import('~/posts/services-topology.vue'))
  // }
}
