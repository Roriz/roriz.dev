<template>
  <main class="main-content" ref="mainContent" :class="{ opened: isOpened }">
    <aside class="sidebar">
      <nav>
        <ul>
          <li><NuxtLink to="/"><i class="fa fa-home"></i> Home</NuxtLink></li>
          <li><NuxtLink to="/blog"><i class="fa fa-pencil-alt"></i> Blog</NuxtLink></li>
          <li><NuxtLink to="/achievements"><i class="fa fa-trophy"></i> Achievements</NuxtLink></li>
        </ul>
      </nav>
    </aside>

    <section class="profile">
      <div class="avatar">
        <img src="assets/me.jpg" alt="Avatar">
      </div>
      <h1>Radamés Roriz</h1>
      <p>Software builder</p>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/radames-roriz/"><i class="fa-brands fa-linkedin" /></a>
        <a href="https://github.com/roriz"><i class="fa-brands fa-github" /></a>
      </div>
    </section>
  </main>

  <transition name="fade" mode="out-in">
    <NuxtPage />
  </transition>


  <button class="custom-fab" @click="isOpened = !isOpened">
    <i class="fa fa-bars"></i>
  </button>
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
</script>

<style>
.main-content {
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  min-height: 100vh;
  background-color: var(--bg-tertiary);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateX(100%);
  opacity: 0;
  z-index: 1;
}
.main-content.opened {
  transform: translateX(0);
  opacity: 1;
}

.sidebar {
  min-width: 300px;
  max-width: 15vw;
  padding: calc(var(--spacing) * 3);
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
  padding: calc(var(--spacing) * 2) 0;
  display: flex;
  justify-content: center;
}

.sidebar nav ul li a.router-link-active {
  color: var(--tx-accent);
}
.sidebar nav ul li a svg {
  margin-right: calc(var(--spacing) * 2);
}

.profile {
  min-width: 300px;
  max-width: 15vw;
  padding: calc(var(--spacing) * 3);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid var(--bg-accent);
  margin-bottom: calc(var(--spacing) * 3);
}

.profile h1 {
  font-size: calc(var(--fz) * 2);
  margin-bottom: calc(var(--spacing) * 2);
}

.profile p {
  margin-bottom: calc(var(--spacing) * 3);
  color: var(--tx-secondary);
}

.social-links {
  margin-bottom: calc(var(--spacing) * 3);
}

.social-links a {
  margin-right: calc(var(--spacing) * 2);
  color: var(--tx-secondary);
  font-size: calc(var(--fz) * 1.5);
}
.social-links a:hover {
  color: var(--tx-accent);
}

.intro {
  padding: calc(var(--spacing) * 5);
  text-align: center;
  color: var(--tx-secondary);
  margin: auto;
  font-size: calc(var(--fz) * 1.5);
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
  font-size: calc(var(--fz) * 1.5);
  transition: background-color 0.3s, color 0.3s;
}

.custom-fab:hover {
  background-color: var(--bg-accent-hover);
  color: var(--tx-accent-hover);
}

@media (min-width: 768px) {
  .main-content {
    flex-direction: row;
    position: relative;
    transform: none;
    opacity: 1;
  }

  .sidebar {
    min-width: 200px;
    max-width: 15vw;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 100vh;
  }
  .sidebar nav ul li a {
    justify-content: flex-start;
  }

  .profile {
    min-width: 300px;
    max-width: 15vw;
    min-height: 100vh;
    background-color: var(--bg-secondary);
  }

  .custom-fab {
    display: none;
  }
}
</style>
