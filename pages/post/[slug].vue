<template>
  <article class="blog-post">
    <header class="post-header">
      <nav aria-label="Post navigation">
        <NuxtLink to="/posts" class="back-link">
          <i class="fas fa-arrow-left" aria-hidden="true" />
        </NuxtLink>
      </nav>

      <h1>{{ post.title }}</h1>
      <time :datetime="post.createdAt">{{ post.createdAt }}</time>
    </header>

    <main>
      <transition name="fade" mode="out-in">
        <component 
          v-if="post.component" 
          :is="post.component" 
          :post="post" 
          class="post" 
        />
        <div v-else class="post-placeholder">
          <p>This post is still a work in progress. Check back soon!</p>
        </div>
      </transition>
    </main>

    <footer class="post-footer">
      <section v-show="false" aria-label="Newsletter subscription">
        <h2>Enjoyed this post?</h2>
        <SubscriptionModal />
      </section>

      <Profile orientation="horizontal" class="post-footer-profile" />

      <section class="recommended-cards">
        <h2>Recommended Posts</h2>

        <div class="recommended-cards-grid">
          <NuxtLink
            v-for="post in recommendedPosts"
            :key="post.slug"
            class="recommended-card"
            :to="{ name: 'post-slug', params: { slug: post.slug } }"
          >
            <component :is="post.component" :post="post" is-preview/>
          </NuxtLink>
        </div>
      </section>
    </footer>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { ALL_POSTS, PUBLISHABLE_POSTS } from '~/consts/all_posts';

import Profile from '~/components/profile.vue';
import SubscriptionModal from '~/components/subscription_modal.vue';

const route = useRoute();
const slug = ref(route.params.slug);

const recommendedPosts = computed(() => {
  const publishedExceptCurrent = Object.values(PUBLISHABLE_POSTS).filter(post => post.slug !== slug.value);
  return Object.values(publishedExceptCurrent).slice(0, 3);
});

const post = computed(() => {
  return ALL_POSTS[slug.value] || ALL_POSTS['my-first-post'];
});
</script>

<style>
.post-header {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}

.post-header .back-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--tx-primary);
  text-decoration: none;
  font-size: 1.6rem;
  padding: calc(var(--spacing) * 1);
}

.post-header a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.post-header time {
  white-space: nowrap;
}


.post, .post-footer > section {
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


.post p {
  margin: var(--spacing) 0;
}
.post p strong, .post p b, .post li strong {
  font-weight: bold;
  color: var(--tx-accent);
}

.post h1, .post h2, .post h3, .post h4, .post h5, .post h6 {
  margin: var(--spacing) 0;
  padding-top: var(--spacing);
  padding-bottom: var(--spacing);
  align-self: flex-start;
}

.post h1 {
  font-size: 2.5rem;
}

.post h2 {
  font-size: 1.8rem;
}

.post img {
  max-width: 70%;
  height: auto;
  margin: var(--spacing) auto;
} 

.post section {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post ol, .post ul {
  margin: var(--spacing) 0;
  padding-left: calc(var(--spacing) * 2);
  max-width: 100%;
}

.post em {
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

  .post h1 {
    font-size: 2rem;
  }

  .post h2 {
    font-size: 1.5rem;
  }
}

.recommended-cards {
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  width: 100%;
  margin-top: var(--spacing);
  align-items: flex-start !important;
}

.recommended-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--spacing);
  width: 100%;
}
.recommended-card {
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
