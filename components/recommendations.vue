<template>
  <section class="recommendations">
    <h2>Recommended Posts</h2>

    <ul class="recommendations__grid">
      <li v-for="post in recommendedPosts" :key="post.slug">
        <NuxtLink
          class="recommended__card"
          :to="{ name: 'post-slug', params: { slug: post.slug } }"
        >
          <component :is="post.component" :post="post" is-preview/>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { PUBLISHABLE_POSTS } from '~/consts/all_posts';

const props = defineProps({
  except: {
    type: String,
    default: ''
  },
  recommendationQuantity: {
    type: Number,
    default: 10
  }
});

const recommendedPosts = computed(() => {
  const publishedExceptCurrent = Object.values(PUBLISHABLE_POSTS).filter(post => props.except !== post.slug);
  return Object.values(publishedExceptCurrent).slice(0, props.recommendationQuantity);
});
</script>

<style>
.recommendations {
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  width: 100%;
  margin-top: var(--spacing);
  align-items: flex-start;
}

.recommendations__grid {
  display: flex;
  flex-direction: row;
  gap: var(--spacing);
  width: 100%;
  overflow: auto;
  white-space: nowrap;
  padding-bottom: calc(var(--spacing) * 2);
  list-style: none;
}

.recommended__card {
  display: flex;
  flex-direction: column;
  padding: calc(var(--spacing) * 2);
  border-radius: 4px;
  background-color: var(--bg-tertiary);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  min-width: 100px;
  max-width: 250px;
  flex: 0 0 auto;
  text-decoration: none;
  color: var(--tx-primary);
}

.post-preview {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.post-preview img {
  margin: auto;
  max-width: 100%;
  max-height: 120px;
}

.post-preview span {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: calc(var(--spacing) * 2);
}
</style>
