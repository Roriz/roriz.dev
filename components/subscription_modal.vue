<template>
  <div>
    <button @click="isOpened = true" class="subscribe-button">
      Subscribe
    </button>
  
    <teleport to="#teleport">
      <div v-if="isOpened" class="modal">
        <div class="modal-content" ref="content">
          <span v-if="isLoading">loading...</span>

          <iframe
            src="https://forms.gle/i7iaSY8vdUnoeydY6"
            frameborder="0"
            :class="{ 'hidden': isLoading }"
            @load="isLoading = false"
          />
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside  } from '@vueuse/core'

const isOpened = ref(false);
const content = ref(null);
const isLoading = ref(true);

const close = () => {
  isOpened.value = false;
  isLoading.value = true;
}

onClickOutside(content, close)

</script>

<style scoped>
.modal {
  position: sticky;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(var(--bg-primary-rgb), .8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: var(--bg-secondary);
  padding: calc(var(--spacing) * 2);
  border: 1px solid var(--bg-tertiary);
  width: 80%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.modal-content:has(iframe) {
  padding: 0;
}
.modal-content iframe {
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity .6s;
}
.modal-content iframe.hidden {
  opacity: 0;
  position: absolute;
  top: 200vh;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}


</style>
