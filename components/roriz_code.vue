<template>
  <pre :style="{ maxWidth: `${maxWidth}px` }">
    <code class="lang-rb" ref="code">
      <slot />
    </code>
  </pre>
</template>

<script setup>
import highlight from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

const code = ref(null);
const maxWidth = ref(0);

function resizeCodeTag() {
  maxWidth.value = window.innerWidth - 64; // padding
  if (window.innerWidth > 769) {
    maxWidth.value = window.innerWidth - 528; // sidebar width + padding
  }
}

onMounted(() => {
  highlight.highlightBlock(code.value);

  if (window?.onresize) { window.onresize = resizeCodeTag }
  resizeCodeTag();
})


</script>

<style scoped>
pre {
  max-width: 100%;
  overflow-x: auto;
  white-space: pre;
  tab-size: 2;
}
code {
  white-space: pre;
}
</style>
