import { defineAsyncComponent } from 'vue';

export const ALL_POSTS = {
  'my-first-post': {
    title: 'My First Post',
    slug: 'my-first-post',
    createdAt: '2021-01-01',
    component: defineAsyncComponent(() => import('~/posts/my-first-post.vue'))
  }
}
