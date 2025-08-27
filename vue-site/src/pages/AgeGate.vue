<template>
  <div class="age-gate">
    <div class="age-gate-panel">
      <!-- 上方可選內容 (留空也可保持底部定位) -->
      <!-- <h1 class="age-title">18+ 年齡驗證</h1> -->

      <!-- 底部固定區 -->
      <div class="age-bottom">
        <div class="age-actions">
          <!-- 圖片按鈕 + hover 換圖 -->
          <button class="age-btn-img" @click="agree" aria-label="我已年滿18歲"
                  @mouseenter="isYesHover=true" @mouseleave="isYesHover=false">
            <img :src="isYesHover ? yesBtnHoverSrc : yesBtnSrc" alt="我已年滿 18 歲" @error="onImgError($event,'yes')" />
          </button>
          <button class="age-btn-img" @click="leave" aria-label="離開"
                  @mouseenter="isExitHover=true" @mouseleave="isExitHover=false">
            <img :src="isExitHover ? exitBtnHoverSrc : exitBtnSrc" alt="離開" @error="onImgError($event,'exit')" />
          </button>
        </div>
        <p class="age-note small mt-3 opacity-75">選擇「我已年滿 18 歲」後將記住此結果。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAgeGatePage } from '@/composables/useAgeGate';
const {
  yesBtnSrc,
  yesBtnHoverSrc,
  exitBtnSrc,
  exitBtnHoverSrc,
  isYesHover,
  isExitHover,
  agree,
  leave,
  onImgError
} = useAgeGatePage();
</script>

<style scoped src="@/styles/ageGate.css"></style>