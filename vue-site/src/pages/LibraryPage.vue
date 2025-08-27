<template>
  <!-- 封面 -->
  <section
    class="cover-frame cover-frame-library"
    :style="{ '--cover-img': 'url(' + base + '/images/library_banner.png)' }"
  >
    <div class="cover-frame-inner">
      <div class="lib-switch-btns">
        <button
          class="lib-switch-btn"
          :class="{ active: currentBlock==='A' }"
          @click="currentBlock='A'"
          @mouseenter="hover='A'"
          @mouseleave="hover=''"
          aria-label="顯示區塊 A">
          <img
            :src="base + (currentBlock==='A'
                  ? btnAActive
                  : (hover==='A' ? btnAHover : btnA))"
            alt="區塊A按鈕"
            draggable="false"
            @error="onImgErr($event,'A')" />
        </button>
        <button
          class="lib-switch-btn"
          :class="{ active: currentBlock==='B' }"
          @click="currentBlock='B'"
          @mouseenter="hover='B'"
          @mouseleave="hover=''"
          aria-label="顯示區塊 B">
          <img
            :src="base + (currentBlock==='B'
                  ? btnBActive
                  : (hover==='B' ? btnBHover : btnB))"
            alt="區塊B按鈕"
            draggable="false"
            @error="onImgErr($event,'B')" />
        </button>
      </div>
    </div>
  </section>

  <!-- 下方背景 + 區塊切換 -->
  <section
    class="library-section-switch use-img"
    :style="{ '--switch-bg': 'url(' + base + '/images/library_bk.png)' }">
    <img class="lib-bg-img" :src="base + '/images/library_bk.png'" alt="下方背景圖">
    <div class="lib-block-wrap">
      <transition name="fade">
        <div v-if="currentBlock==='A'" key="A" class="lib-block lib-block-a">
          A block
        </div>
      </transition>
      <transition name="fade">
        <div v-if="currentBlock==='B'" key="B" class="lib-block lib-block-b">
          <!-- 六格照片區 (左 3 右 3) -->
          <section class="library-photo-section">
            <div class="lib-photo-grid">
              <div
                v-for="(p,i) in photos"
                :key="i"
                class="lib-photo-item"
                :class="p.type"
              >
                <!-- 第一張：原圖比例直接顯示 -->
                <img
                  v-if="p.type==='single'"
                  :src="base + p.src"
                  :alt="p.alt"
                  class="lib-photo-raw"
                  loading="lazy"
                  @error="onPhotoErr($event,true)"
                />

                <!-- 其餘：背景(frame) + 中心內層圖片 -->
                <div
                  v-else
                  class="lib-photo-frame"
                  :style="{ '--frame-img': 'url(' + base + p.frameSrc + ')' }"
                >
                  <img
                    class="lib-photo-inner"
                    :src="base + p.innerSrc"
                    :alt="p.alt"
                    loading="lazy"
                    @error="onPhotoErr($event,false)"
                  />
                </div>

                <div v-if="p.caption" class="lib-cap">{{ p.caption }}</div>
              </div>
            </div>
          </section>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import '@/styles/library.css';
import { useLibraryPageState } from '../composables/libraryPageState';
const {
  base,
  currentBlock,
  btnA, btnAActive, btnAHover,
  btnB, btnBActive, btnBHover,
  onImgErr,
  photos,
  onPhotoErr
} = useLibraryPageState();

import { ref } from 'vue';
const hover = ref('');
</script>

<!-- 樣式已分離至 library.css -->
