import { defineAsyncComponent } from 'vue';

export const ALL_POSTS = {
  'tropical_on_rails_2026': {
    title: 'Tropical on Rails 2026',
    slug: 'tropical_on_rails_2026',
    createdAt: '2026-04-12',
    component: defineAsyncComponent(() => import('@/components/posts/tropical_on_rails_2026.vue'))
  },
  'gen_ai_is_for_small_tasks': {
    title: 'GenAI is for small tasks, not fully autonomous systems',
    slug: 'gen_ai_is_for_small_tasks',
    createdAt: '2025-06-17',
    component: defineAsyncComponent(() => import('@/components/posts/gen_ai_is_for_small_tasks.vue'))
  },
  'scaling_genAI_by_engineer_vision': {
    title: 'Scaling GenAI by Engineer Vision',
    slug: 'scaling_genAI_by_engineer_vision',
    createdAt: '2025-04-27',
    component: defineAsyncComponent(() => import('@/components/posts/scaling_genAI_by_engineer_vision.vue'))
  },
  'ai_hype_is_real_but_for_the_wrong_reason': {
    title: 'AI hype is real, but for the wrong reason',
    slug: 'ai_hype_is_real_but_for_the_wrong_reason',
    createdAt: '2025-01-17',
    component: defineAsyncComponent(() => import('@/components/posts/ai_hype_is_real_but_for_the_wrong_reason.vue'))
  },
  'data-extraction': {
    title: 'AI reshaped software: Data Extraction',
    slug: 'data-extraction',
    createdAt: '2024-12-22',
    component: defineAsyncComponent(() => import('@/components/posts/data_extraction.vue'))
  },
  'agi-is-not-that-important': {
    title: 'AGI is not that important',
    slug: 'agi-is-not-that-important',
    createdAt: '2024-12-13',
    component: defineAsyncComponent(() => import('@/components/posts/agi_is_not_that_important.vue'))
  },
}

export const PUBLISHABLE_POSTS = Object.fromEntries(
  Object.entries(ALL_POSTS).filter(([_, post]) => post.component)
);
