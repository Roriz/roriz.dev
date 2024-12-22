<template>
  <div class="profile" :class="orientation">
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
    </div>

  </div>
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
>

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
  width: 200px;
  height: 200px;
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
</style>
