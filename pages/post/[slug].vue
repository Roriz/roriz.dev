<template>
  <section>
    <div class="post-header">
      <NuxtLink to="/posts">
        <i class="fas fa-arrow-left" />
        Back
      </NuxtLink>

      <h1>{{ post.title }}</h1>
      <time datetime="{{ post.createdAt }}">{{ post.createdAt }}</time>
    </div>

    <transition name="fade" mode="out-in">
      <component :is="post.component" :post="post" />
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { ALL_POSTS } from '~/consts/all_posts';

const route = useRoute();
const slug = ref(route.params.slug);

const post = computed(() => {
  return ALL_POSTS[slug.value] || ALL_POSTS['my-first-post'];
});
</script>

<style scoped>
.post-header {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: calc(var(--spacing) * 2);
  justify-content: space-between;
}

.post-header a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
