<template>
  <div>
    <Recommendations />

    <h1>Posts</h1>
    <ul class="posts">
      <li v-for="post in ALL_POSTS" :key="post.slug" :class="{ 'wip': !post.component }">
        <NuxtLink :to="`/post/${post.slug}`">
          <span>{{ post.title }}</span>
          <time datetime="{{ post.createdAt }}">{{ post.createdAt }}</time>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ALL_POSTS } from '~/consts/all_posts';

import Recommendations from '~/components/recommendations.vue';

useHead({
  title: 'Posts',
  meta: [
    {
      name: 'description',
      content: `Here is the place where I share my thoughts, projects, achievements, and anything else I find inspiring.`
    },
    { name: 'keywords', content: 'software engineer, software development, technology, entrepreneur, generative AI, Radamés Roriz' },
    { name: 'author', content: 'Radamés Roriz' },
  ]
})
</script>

<style scoped>
h1 {
  font-size: 2rem;
  margin: calc(var(--spacing) * 2) 0;
}

.posts {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.posts li {
  width: 100%;
}

.posts li a {
  display: flex;
  color: var(--tx-primary);
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-bottom: 1px solid var(--bg-tertiary);
  padding: calc(var(--spacing) * 2);
}

.posts li.wip a {
  color: var(--tx-secondary);
}


.posts li a:hover {
  background-color: var(--bg-tertiary);
}

.posts li a span {
  font-size: 1.25rem;
  font-weight: 700;
}

.posts li a time {
  font-size: 0.875rem;
  color: var(--tx-secondary);
  margin-left: auto;
}

</style>
