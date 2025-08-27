<template>
  <!-- 全幅封面（背景左右滿版） -->
  <section class="cover-frame" :style="{ '--cover-img': 'url(' + base + '/images/summer_welcome_with_name.png)' }">
    <div class="cover-frame-inner">
    </div>
  </section>

  <div class="container section-spacing">
    <!-- 消息列表 News with background feature block -->
    <section class="mt-5 news-feature-block">
      <div class="news-feature-bg">
        <div class="news-feature-bg-content">
          <div class="news-section-half">
          <!-- <div class="d-flex align-items-center mb-4">
            <h3 class="h4 mb-0">最新消息</h3>
            <RouterLink to="/products" class="btn btn-link ms-2 p-0 small">全部消息 →</RouterLink>
          </div> -->
          <div class="list-group shadow-sm news-list-dark news-list-scroll" aria-label="最新消息列表 (可滾動)">
            <a v-for="n in news" :key="n.id" href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start news-item-dark">
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
import { computed, ref, onMounted } from 'vue';
import { useMarqueeTicker } from '@/composables/useMarqueeTicker';
import { useHeroCarousel } from '@/composables/useHeroCarousel';
import { useHomePageState } from '@/composables/homePageState';
import '@/styles/home.css';

// 資料 & 基本頁面資料 (改用合併後 composable)
const { heroSlides, news, youtubeEmbedUrl, base: baseFromState } = useHomePageState();

// Hero
const { currentSlide, nextSlide, prevSlide, goTo, startAuto, stopAuto, transitioning, prevSlideIndex, nextSlideIndex } = useHeroCarousel({ slides: heroSlides, intervalMs:6000 });

// Ticker
const tickerMessages = computed(()=> news.value.map(n => `[${n.tag}] ${n.date} - ${n.title}`));
const { viewportRef, rowRef, marqueeItems, pauseTicker, resumeTicker } = useMarqueeTicker(()=> tickerMessages.value, { speed:70 });

const base = baseFromState || import.meta.env.BASE_URL || '/';

const showBadge = ref(false);

</script>

<!-- 樣式與邏輯已分離：樣式在 src/styles/home.css，邏輯在 composables 中 -->
