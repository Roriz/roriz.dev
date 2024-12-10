<template>
  <main id="app">
    <section class="menu" ref="mainContent" :class="{ opened: isOpened }">
      <aside class="sidebar">
        <nav>
          <ul>
            <li><NuxtLink to="/"><i class="fa fa-home"></i> Home</NuxtLink></li>
            <li><NuxtLink to="/posts"><i class="fa fa-pencil-alt"></i> Blog</NuxtLink></li>
            <li><NuxtLink to="/about"><i class="fa fa-user"></i> About</NuxtLink></li>
          </ul>
        </nav>
      </aside>
  
      <div class="profile">
        <div class="avatar">
          <img src="assets/radames_roriz.jpg" alt="Avatar">
        </div>
        <h1>Radamés Roriz</h1>
        <p>Software builder</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/radames-roriz/"><i class="fa-brands fa-linkedin" /></a>
          <a href="https://github.com/roriz"><i class="fa-brands fa-github" /></a>
        </div>
      </div>
    </section>
  
    <section class="content">
      <transition name="fade" mode="out-in">
        <NuxtPage />
      </transition>
    </section>
  
    <button class="custom-fab" @click="isOpened = !isOpened">
      <i class="fa fa-bars"></i>
    </button>
  </main>
</template>

<script setup>
import { ref } from 'vue';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './assets/main.css';
import { onClickOutside  } from '@vueuse/core'

const isOpened = ref(false);
const mainContent = ref(null)

const router = useRouter();
router.afterEach(() => {
  isOpened.value = false;
});
onClickOutside(mainContent, () => {
  isOpened.value = false
})

useHead({
  title: 'Radamés Roriz - Software builder',
  meta: [
    { name: 'description', content: 'Radamés Roriz - Software builder' },
    { name: 'author', content: 'Radamés Roriz' },
    { name: 'keywords', content: 'software, developer, engineer' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#000000' },
    { name: 'application-name', content: 'Radamés Roriz' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    { name: 'google', content: 'nositelinkssearchbox' },
    { name: 'google', content: 'notranslate' },
    { name: 'google', content: 'nositelinkssearchbox' },
    { name: 'google', content: 'max-snippet:-1' },
    { name: 'google', content: 'max-image-preview:large' },
    { name: 'google', content: 'max-video-preview:-1' },
    { name: 'og:title', content: 'Radamés Roriz - Software builder' },
    { name: 'og:description', content: 'Radamés Roriz - Software builder' },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://roriz.dev' },
    { name: 'og:image', content: 'https://roriz.dev/assets/radames_roriz.jpg' },
    { name: 'og:site_name', content: 'Radamés Roriz' },
    { name: 'og:locale', content: 'en_US' },
    { name: 'og:image:width', content: '1200' },
  ]
})
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
}

.menu {
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  min-height: 100vh;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateX(100%);
  opacity: 0;
  z-index: 1;
  background-color: var(--bg-tertiary);
}
.menu.opened {
  transform: translateX(0);
  opacity: 1;
}

.sidebar {
  min-width: 300px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: auto;
}
.sidebar nav {
  width: 100%;
}

.sidebar nav ul {
  list-style: none;
}

.sidebar nav ul li a {
  text-decoration: none;
  color: var(--tx-secondary);
  padding: calc(var(--spacing) * 3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid var(--bg-tertiary);
  font-size: 0.6rem;
  text-transform: uppercase;
}

.sidebar nav ul li a.router-link-active {
  color: var(--tx-accent);
}
.sidebar nav ul li a svg {
  font-size: 1.5rem;
  margin-bottom: calc(var(--spacing) * 1);
}

.profile {
  min-width: 300px;
  max-width: 300px;
  padding: calc(var(--spacing) * 3);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid var(--bg-accent);
  margin-bottom: calc(var(--spacing) * 3);
}

.profile h1 {
  font-size: 2rem;
  margin-bottom: calc(var(--spacing) * 2);
}

.profile p {
  margin-bottom: calc(var(--spacing) * 3);
  color: var(--tx-secondary);
  font-size: 1.2rem;
}

.social-links {
  margin-bottom: calc(var(--spacing) * 3);
}

.social-links a {
  margin-right: calc(var(--spacing) * 2);
  color: var(--tx-primary);
  font-size: 1.5rem;
}
.social-links a:hover {
  color: var(--tx-accent);
}

.intro {
  padding: calc(var(--spacing) * 5);
  text-align: center;
  color: var(--tx-secondary);
  margin: auto;
  font-size: 1.5rem;
}

.custom-fab {
  position: fixed;
  bottom: calc(var(--spacing) * 3);
  right: calc(var(--spacing) * 3);
  padding: calc(var(--spacing) * 2);
  background-color: var(--bg-accent);
  color: var(--tx-primary);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s, color 0.3s;
}

.custom-fab:hover {
  background-color: var(--bg-accent-hover);
  color: var(--tx-accent-hover);
}

@media (min-width: 768px) {
  .menu {
    flex-direction: row;
    position: sticky;
    transform: none;
    opacity: 1;
  }

  .sidebar {
    min-width: 100px;
    max-width: 100px;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 100vh;
    background-color: var(--bg-primary);
  }
  .sidebar nav ul li a {
    justify-content: flex-start;
  }

  .profile {
    min-width: 300px;
    max-width: 15vw;
    min-height: 100vh;
    background-color: var(--bg-tertiary);
  }

  .custom-fab {
    display: none;
  }
}

.content {
  padding: calc(var(--spacing) * 4);
  width: 100%;
  min-height: 100vh;
}
</style>
