<template>
  <!-- 全幅封面（背景左右滿版） -->
  <section class="cover-frame" :style="{ '--cover-img': 'url(' + base + '/images/summer_welcome_with_name.png)' }">
    <div class="cover-frame-inner">
      <!-- 封面徽章 (若要啟用取消註解)
      <img v-if="showBadge" class="cover-badge" :src="base + 'images/mainboy.png'" alt="封面裝飾" />
      -->
    </div>
  </section>

  <!-- Hero Carousel -->
  <div class="hero-carousel mb-5" @mouseenter="stopAuto" @mouseleave="startAuto">
    <div
      class="hero-slide"
      v-for="(s,i) in heroSlides"
      :key="s.id"
      :class="{active:i===currentSlide, prev: i===prevSlideIndex, next: i===nextSlideIndex}"
      :style="{backgroundImage: 'url(' + s.image + ')'}"
    >
      <div class="hero-layer"></div>
      <div class="container hero-inner">
        <h1 class="display-5 fw-bold mb-3">{{ s.title }}</h1>
        <p class="lead mb-4">{{ s.subtitle }}</p>
        <RouterLink v-if="s.cta" :to="s.cta.to" class="btn btn-primary btn-lg px-4">{{ s.cta.label }}</RouterLink>
      </div>
    </div>
    <button class="hero-control prev" @click="prevSlide" aria-label="上一張">‹</button>
    <button class="hero-control next" @click="nextSlide" aria-label="下一張">›</button>
    <div class="hero-dots">
      <button
        v-for="(s,i) in heroSlides"
        :key="s.id"
        @click="goTo(i)"
        :class="{active: i===currentSlide}"
        :aria-label="'跳到第'+(i+1)+'張'"
      />
    </div>
  </div>

  <div class="container section-spacing">
    <section class="mt-5 news-feature-block">
      <div class="news-feature-bg">
        <div class="news-feature-bg-content">
          <div class="news-section-half">
            <div class="list-group shadow-sm news-list-dark news-list-scroll" aria-label="最新消息列表 (可滾動)">
              <a
                v-for="n in newsTop3"
                :key="n.id"
                href="#"
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-start news-item-dark"
              >
                <div>
                  <div class="fw-semibold">{{ n.title }}</div>
                  <div class="small text-muted">{{ n.date }}</div>
                </div>
                <span class="badge bg-primary rounded-pill align-self-center">{{ n.tag }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 分離後只留下導入與解構
import '@/styles/home.css';
import { useHomePageState } from '../composables/homePageState';

const {
  base,
  heroSlides,
  currentSlide,
  prevSlideIndex,
  nextSlideIndex,
  nextSlide,
  prevSlide,
  goTo,
  startAuto,
  stopAuto,
  newsTop3,
  // 若之後啟用跑馬燈可用以下：
  viewportRef,
  rowRef,
  marqueeItems,
  pauseTicker,
  resumeTicker,
  showBadge
} = useHomePageState();
</script>

<!-- 樣式與邏輯已分離：樣式在 src/styles/home.css，邏輯在 composables 中 -->
