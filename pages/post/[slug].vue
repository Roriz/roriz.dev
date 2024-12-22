<template>
  <div>
    <section class="post-header">
      <NuxtLink to="/posts">
        <i class="fas fa-arrow-left" />
        Back
      </NuxtLink>

      <h1>{{ post.title }}</h1>
      <time datetime="{{ post.createdAt }}">{{ post.createdAt }}</time>
    </section>

    <transition name="fade" mode="out-in">
      <component v-if="post.component" :is="post.component" :post="post" class="post" />
      <span v-else>
        <p>This post is still a work in progress. Check back soon!</p>
      </span>
    </transition>

    <section class="post-footer">
      <p>Enjoyed this post?</p>
      <SubscriptionModal />
    </section>
    <Profile orientation="horizontal" class="post-footer" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ALL_POSTS } from '~/consts/all_posts';
import Prism from 'prismjs';
import 'prismjs/components/prism-ruby';
import 'prismjs/themes/prism-tomorrow.css';

import Profile from '~/components/profile.vue';
import SubscriptionModal from '~/components/subscription_modal.vue';

const route = useRoute();
const slug = ref(route.params.slug);

const post = computed(() => {
  return ALL_POSTS[slug.value] || ALL_POSTS['my-first-post'];
});

onMounted(() => {
  console.log(Prism);
  Prism.highlightAll();
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

.post, .post-footer {
  margin: var(--spacing) 0;
  padding: calc(var(--spacing) * 4);
  border-radius: 4px;
  background-color: var(--bg-secondary);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Arial', sans-serif;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.post >>> p {
  margin: var(--spacing) 0;
}
.post >>> p strong, .post >>> p b, .post >>> li strong {
  font-weight: bold;
  color: var(--tx-accent);
}

.post >>> h1, .post >>> h2, .post >>> h3, .post >>> h4, .post >>> h5, .post >>> h6 {
  margin: var(--spacing) 0;
  padding-top: var(--spacing);
  padding-bottom: var(--spacing);
  align-self: flex-start;
}

.post >>> h1 {
  font-size: 2.5rem;
}

.post >>> h2 {
  font-size: 1.8rem;
}

.post >>> img {
  max-width: 70%;
  height: auto;
}

.post >>> pre {
  max-width: 100%;
  overflow-x: auto;
}

.post >>> em {
  font-style: italic;
  width: 90%;
  display: block;
  margin: var(--spacing) auto;
  font-size: .9rem;
}

@media (max-width: 768px) {
  .post {
    padding: calc(var(--spacing) * 2);
  }

  .post >>> h1 {
    font-size: 2rem;
  }

  .post >>> h2 {
    font-size: 1.5rem;
  }
}
</style>
