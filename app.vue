<template>
  <div class="container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <nav>
        <ul>
          <li><a href="#" class="active">Home</a></li>
          <li><a href="#">About Me</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <section class="profile">
        <div class="avatar">
          <img src="assets/me.jpg" alt="Avatar">
        </div>
        <h1>Radamés Roriz</h1>
        <p>Software builder</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/radames-roriz/"><i class="fas fa-linkedin"></i></a>
          <a href="https://github.com/roriz"><i class="fas fa-github"></i></a>
        </div>
      </section>
    </main>

    <section class="intro">
      <p>
        Technology holds the power to elevate humanity, reshaping lives for the better. To contribute to this transformation is not just a choice, it's my purpose
      </p>
    </section>
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
  min-width: 150px;
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

.sidebar nav ul li {
  margin: calc(var(--spacing) * 3) 0;
}

.sidebar nav ul li a {
  text-decoration: none;
  color: var(--tx-secondary);
}

.sidebar nav ul li a.active {
  color: var(--tx-accent);
}

/* Main Content */
.main-content {
  min-width: 250px;
  max-width: 15vw;
  background-color: var(--bg-tertiary);
  padding: calc(var(--spacing) * 5);
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

.intro {
  padding: calc(var(--spacing) * 5);
  text-align: center;
  color: var(--tx-secondary);
  margin: auto;
  font-size: calc(var(--fz) * 1.5);
}

</style>
