<template>
  <div>
    <h1>Posts</h1>
  
    <ul class="posts">
      <li v-for="post in ALL_POSTS" :key="post.slug">
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
</script>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: calc(var(--spacing) * 2);
}

.posts {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
}

.posts li {
  margin-bottom: calc(var(--spacing) * 2);
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
  padding: calc(var(--spacing) * 2) 0;
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
