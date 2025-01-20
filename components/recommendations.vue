<template>
  <section class="recommendations">
    <h2>Recommended Posts</h2>

    <div class="recommendations__grid">
      <NuxtLink
        v-for="post in recommendedPosts"
        :key="post.slug"
        class="recommended__card"
        :to="{ name: 'post-slug', params: { slug: post.slug } }"
      >
        <component :is="post.component" :post="post" is-preview/>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { PUBLISHABLE_POSTS } from '~/consts/all_posts';

const props = defineProps({
  except: {
    type: String,
    default: ''
  }
});

const recommendedPosts = computed(() => {
  const publishedExceptCurrent = Object.values(PUBLISHABLE_POSTS).filter(post => props.except !== post.slug);
  return Object.values(publishedExceptCurrent).slice(0, 3);
});
</script>

<style>
.recommendations {
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  width: 100%;
  margin-top: var(--spacing);
  align-items: flex-start !important;
}

.recommendations__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--spacing);
  width: 100%;
}
.recommended__card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing);
  border-radius: 4px;
  background-color: var(--bg-tertiary);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  max-width: 30%;
  min-width: 150px;
  text-decoration: none;
  color: var(--tx-primary);
  /* align-items: space-between; */
}

.post-preview {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.post-preview img {
  margin: auto;
  max-width: 130px;
}

.post-preview span {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: auto;
}
</style>
