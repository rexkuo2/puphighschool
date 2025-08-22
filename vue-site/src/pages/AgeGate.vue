<template>
  <div class="age-gate">
    <div class="age-gate-panel">
      <h1 class="age-title">18+ 年齡驗證</h1>
      <p class="age-text">
        本網站可能包含僅適合年滿 18 歲之內容。<br>
        若您未滿 18 歲或不同意，請離開。
      </p>
      <div class="age-actions">
        <button class="btn btn-lg btn-success px-4" @click="agree">我已年滿 18 歲</button>
        <button class="btn btn-lg btn-outline-light px-4" @click="leave">離開</button>
      </div>
      <p class="age-note small mt-3 opacity-75">選擇「我已年滿 18 歲」後將記住此結果。</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useAgeGate } from '@/composables/useAgeGate';

const router = useRouter();
const route = useRoute();
const { setAccepted } = useAgeGate();

function agree() {
  setAccepted();
  const redirect = route.query.redirect || '/';
  router.replace(redirect);
}
function leave() {
  window.location.href = 'https://www.google.com/';
}
</script>