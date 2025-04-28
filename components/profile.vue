<template>
  <section class="profile" :class="orientation">
    <div class="avatar">
      <img src="assets/radames_roriz.optimized.jpg" alt="Avatar">
    </div>

    <div class="profile-info">
      <h1>Radamés Roriz</h1>
      <p>Software builder</p>

      <ul class="social-links">
        <li><a href="https://www.linkedin.com/in/radames-roriz/"><i class="fa-brands fa-linkedin" /></a></li>
        <li><a href="https://github.com/roriz"><i class="fa-brands fa-github" /></a></li>
        <li><a href="to:radames@roriz.dev"><i class="fa-solid fa-envelope" /></a></li>
      </ul>

      <p v-if="orientation === 'vertical'" class="profile-description">
        GenAI hype is real, but mainly for small and clearly defined problems.
        The simpler and clearer the expected output, the more consistent the AI will be.
        It's not as fancy as it sounds, but it completely changes the way we create value.
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  orientation: {
    type: String,
    default: 'vertical',
    validator: (value) => ['vertical', 'horizontal'].includes(value)
  }
})
</script>

<style scoped>
.profile {
  padding: calc(var(--spacing) * 3);
  display: flex;
  align-items: center;
}

.profile.horizontal {
  flex-direction: row;
  justify-content: center;
}
.profile.horizontal img {
  margin-right: calc(var(--spacing) * 2);
}

.profile.vertical {
  flex-direction: column;
}
.profile.vertical img {
  margin-bottom: calc(var(--spacing) * 2);
}

.avatar img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 2px solid var(--bg-accent);
}

.profile h1 {
  font-size: 2rem;
  margin-bottom: calc(var(--spacing) * 1);
}

.profile p {
  color: var(--tx-secondary);
  font-size: 1.2rem;
  margin-bottom: calc(var(--spacing) * 2);
}

.social-links {
  display: flex;
  list-style: none;
  padding-left: 5px;
}
.profile .social-links li {
  margin-right: calc(var(--spacing) * 2);
}
.profile .social-links li:last-child {
  margin-right: 0;
}

.social-links a {
  color: var(--tx-primary);
  font-size: 1.5rem;
}
.social-links a:hover {
  color: var(--tx-accent);
}

.profile-description {
  margin-top: calc(var(--spacing) * 2);
}

@media (max-width: 768px) {
  .profile {
    padding: calc(var(--spacing) * 2);
  }
  .avatar img {
    width: 8rem;
    height: 8rem;
  }
  .profile h1 {
    font-size: 1.5rem;
  }
  .profile p {
    font-size: 1rem;
  }
  .social-links a {
    font-size: 1.2rem;
  }
}
</style>
