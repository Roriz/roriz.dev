<template>
  <div>
    <section class="intro">
      <h2>
        I believe <b>technology</b> improves lives,<br/>
        and being part of that change is essential to <b>me</b>.
      </h2>
      <br/>
      <NuxtLink to="/posts"><i class="fa fa-pencil-alt"></i> See my opinions</NuxtLink>
    </section>
  
    <Recommendations />
  </div>
</template>

<script setup>
import Recommendations from '~/components/recommendations.vue';
</script>

<style scoped>
.intro {
  padding: calc(var(--spacing) * 5);
  text-align: center;
  color: var(--tx-secondary);
  margin: auto;
  font-size: calc(var(--fz) * 1.5);
}

</style>
