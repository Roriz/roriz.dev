<template>
  <div class="container">
    <aside class="sidebar">
      <nav>
        <ul>
          <li><NuxtLink to="/"><i class="fa fa-home"></i> Home</NuxtLink></li>
          <li><NuxtLink to="/blog"><i class="fa fa-pencil-alt"></i> Blog</NuxtLink></li>
          <li><NuxtLink to="/achievements"><i class="fa fa-trophy"></i> Achievements</NuxtLink></li>
        </ul>
      </nav>
    </aside>

    <main class="main-content">
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

    <NuxtPage />
  </div>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './assets/main.css';
</script>

<style>
.container {
  display: flex;
  min-height: 100vh;
}

/* Sidebar */
.sidebar {
  min-width: 200px;
  max-width: 15vw;
  background-color: var(--bg-secondary);
  padding: calc(var(--spacing) * 3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar nav ul {
  list-style: none;
}

.sidebar nav ul li a {
  text-decoration: none;
  color: var(--tx-secondary);
  padding: calc(var(--spacing) * 2) 0;
  display: block;
}

.sidebar nav ul li a.router-link-active {
  color: var(--tx-accent);
}

.main-content {
  min-width: 300px;
  max-width: 15vw;
  background-color: var(--bg-tertiary);
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

</style>
