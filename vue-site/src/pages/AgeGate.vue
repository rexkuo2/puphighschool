<template>
  <div class="age-gate">
    <div class="age-gate-panel">
      <!-- 上方可選內容 (留空也可保持底部定位) -->
      <!-- <h1 class="age-title">18+ 年齡驗證</h1> -->

      <!-- 底部固定區 -->
      <div class="age-bottom">
        <div class="age-actions">
          <button class="btn btn-lg btn-success px-4" @click="agree">我已年滿 18 歲</button>
          <button class="btn btn-lg btn-exit px-4" @click="leave">離開</button>
        </div>
        <p class="age-note small mt-3 opacity-75">選擇「我已年滿 18 歲」後將記住此結果。</p>
      </div>
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
  router.replace(route.query.redirect && !String(route.query.redirect).startsWith('/age-gate')
    ? route.query.redirect
    : '/');
}
function leave() {
  window.location.href = 'https://www.google.com/';
}
</script>